'use client';

import React from 'react';

import { useState, type FormEvent } from 'react';
import type { Locale } from '@/lib/types';
import { Card } from './Card';
import { Button } from './Button';
import { H3, P } from './Typography';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';

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
  noCard?: boolean;
}

export function FormSection({
  locale,
  title,
  description,
  listId,
  fields = { firstName: true, city: true, email: true, phone: true },
  checkboxes = {},
  noCard = false,
}: FormSectionProps): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.forms, locale);
  const [formData, setFormData] = useState({
    firstName: '',
    city: '',
    email: '',
    phone: '',
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
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, listId }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          city: '',
          email: '',
          phone: '',
          joinOffline: false,
          joinOnline: false,
          canTakePart: false,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
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

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Submitting...' : translate('submit')}
        </Button>

        {submitStatus === 'success' && (
          <P className="text-green-600 text-base">Thank you! Your submission was successful.</P>
        )}
        {submitStatus === 'error' && (
          <P className="text-red-600 text-base">Something went wrong. Please try again.</P>
        )}
      </form>
    </>
  );

  if (noCard) {
    return formContent;
  }

  return <Card>{formContent}</Card>;
}

