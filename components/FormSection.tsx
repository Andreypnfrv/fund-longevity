'use client';

import React from 'react';

import { useState, type FormEvent } from 'react';
import type { Locale } from '@/lib/types';
import { Card } from './Card';
import { Button } from './Button';
import { H3, P } from './Typography';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { mailchimpConfig } from '@/lib/config';

const INTENT_MAILCHIMP = {
  inPerson: 'I want to join in-person',
  online: 'I want to join online',
  organisation: 'I can take part in organisation',
} as const;

interface FormSectionProps {
  locale: Locale;
  title?: string;
  description?: string;
  listId: string;
  fields?: {
    firstName?: boolean;
    city?: boolean;
    email?: boolean;
    phone?: boolean;
  };
  checkboxes?: {
    joinOffline?: boolean;
    joinOnline?: boolean;
    canTakePart?: boolean;
  };
  intentRadio?: boolean;
  noCard?: boolean;
  mailchimpUserId?: string;
  mailchimpFormId?: string;
  mailchimpServer?: string;
}

export function FormSection({
  locale,
  title,
  description,
  listId,
  fields = { firstName: true, city: true, email: true, phone: true },
  checkboxes = {},
  intentRadio = false,
  noCard = false,
  mailchimpUserId,
  mailchimpFormId,
  mailchimpServer,
}: FormSectionProps): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.forms, locale);
  const [formData, setFormData] = useState({
    firstName: '',
    city: '',
    email: '',
    phone: '',
    intent: '',
    joinOffline: false,
    joinOnline: false,
    canTakePart: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const userId = mailchimpUserId || mailchimpConfig.userId;
      const formId = mailchimpFormId;
      const server = mailchimpServer || mailchimpConfig.server;

      if (!userId || !listId || !formId) {
        throw new Error('Mailchimp configuration missing');
      }

      const formDataToSend = new URLSearchParams();
      formDataToSend.append('EMAIL', formData.email);
      if (formData.firstName) formDataToSend.append('FNAME', formData.firstName);
      if (formData.phone) formDataToSend.append('PHONE', formData.phone);
      if (formData.intent) formDataToSend.append('INTENT', formData.intent);
      if (formData.city) formDataToSend.append('MMERGE9', formData.city);
      formDataToSend.append(`b_${userId}_${listId}`, '');

      const callbackName = `mailchimpCallback_${Date.now()}`;
      const mailchimpUrl = `https://${server}.list-manage.com/subscribe/post-json?u=${encodeURIComponent(userId)}&id=${encodeURIComponent(listId)}&f_id=${encodeURIComponent(formId)}&${formDataToSend.toString()}&c=${encodeURIComponent(callbackName)}`;

      await new Promise<void>((resolve, reject) => {
        (window as any)[callbackName] = (data: { result?: string; msg?: string }) => {
          delete (window as any)[callbackName];
          const script = document.getElementById(`mailchimp-script-${callbackName}`);
          if (script) script.remove();

          if (data.result === 'success') {
            resolve();
          } else {
            reject(new Error(data.msg || 'Subscription failed'));
          }
        };

        const script = document.createElement('script');
        script.id = `mailchimp-script-${callbackName}`;
        script.src = mailchimpUrl;
        script.onerror = () => {
          delete (window as any)[callbackName];
          reject(new Error('Network error'));
        };
        document.body.appendChild(script);
      });

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        city: '',
        email: '',
        phone: '',
        intent: '',
        joinOffline: false,
        joinOnline: false,
        canTakePart: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <>
      {title && !noCard && <H3 className="mb-4">{title}</H3>}
      {description && !noCard && <P className="mb-6 text-gray-600">{description}</P>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.firstName && (
          <div>
            <label htmlFor="firstName" className="block  text-base font-medium mb-1">
              {translate('firstName')}
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md "
            />
          </div>
        )}

        {fields.city && (
          <div>
            <label htmlFor="city" className="block  text-base font-medium mb-1">
              {translate('city')}
            </label>
            <input
              type="text"
              id="city"
              required
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md "
            />
          </div>
        )}

        {fields.email && (
          <div>
            <label htmlFor="email" className="block  text-base font-medium mb-1">
              {translate('email')}
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md "
            />
          </div>
        )}

        {fields.phone && (
          <div>
            <label htmlFor="phone" className="block  text-base font-medium mb-1">
              {translate('phone')}
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md "
            />
          </div>
        )}

        {checkboxes.joinOffline && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="joinOffline"
              checked={formData.joinOffline}
              onChange={(e) => setFormData({ ...formData, joinOffline: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="joinOffline" className=" text-base">
              {translate('joinOffline')}
            </label>
          </div>
        )}

        {checkboxes.joinOnline && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="joinOnline"
              checked={formData.joinOnline}
              onChange={(e) => setFormData({ ...formData, joinOnline: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="joinOnline" className=" text-base">
              {translate('joinOnline')}
            </label>
          </div>
        )}

        {checkboxes.canTakePart && (
          <div className="flex items-center">
            <input
              type="checkbox"
              id="canTakePart"
              checked={formData.canTakePart}
              onChange={(e) => setFormData({ ...formData, canTakePart: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="canTakePart" className=" text-base">
              {translate('canTakePart')}
            </label>
          </div>
        )}

        {intentRadio && (
          <div>
            <label className="block text-base font-medium mb-2">{translate('intent')}</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="intent-in-person"
                  name="intent"
                  value={INTENT_MAILCHIMP.inPerson}
                  checked={formData.intent === INTENT_MAILCHIMP.inPerson}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  className="mr-2"
                />
                <label htmlFor="intent-in-person" className="text-base">
                  {translate('joinInPerson')}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="intent-online"
                  name="intent"
                  value={INTENT_MAILCHIMP.online}
                  checked={formData.intent === INTENT_MAILCHIMP.online}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  className="mr-2"
                />
                <label htmlFor="intent-online" className="text-base">
                  {translate('joinOnline')}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="intent-organisation"
                  name="intent"
                  value={INTENT_MAILCHIMP.organisation}
                  checked={formData.intent === INTENT_MAILCHIMP.organisation}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  className="mr-2"
                />
                <label htmlFor="intent-organisation" className="text-base">
                  {translate('canTakePartInOrganisation')}
                </label>
              </div>
            </div>
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? translate('sending') : translate('submit')}
        </Button>

        {submitStatus === 'success' && (
          <P className="text-green-600 text-base">{translate('successMessage')}</P>
        )}
        {submitStatus === 'error' && (
          <P className="text-red-600 text-base">{translate('errorMessage')}</P>
        )}
      </form>
    </>
  );

  if (noCard) {
    return formContent;
  }

  return <Card>{formContent}</Card>;
}

