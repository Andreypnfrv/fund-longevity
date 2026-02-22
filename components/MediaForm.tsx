'use client';

import React, { useState, type FormEvent } from 'react';
import type { Locale } from '@/lib/types';
import { Button } from './Button';
import { P } from './Typography';
import { FormInput } from './FormInputs';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { mailchimpConfig } from '@/lib/config';

interface MediaFormProps {
  locale: Locale;
  listId: string;
  formId: string;
}

export function MediaForm({
  locale,
  listId,
  formId,
}: MediaFormProps): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.forms, locale);
  const [formData, setFormData] = useState({
    firstName: '',
    city: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.email || !validateEmail(formData.email)) {
      setEmailError(translate('emailInvalid'));
      return;
    }
    
    setEmailError('');
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const userId = mailchimpConfig.userId;
      const server = mailchimpConfig.server;

      const formDataToSend = new URLSearchParams();
      formDataToSend.append('EMAIL', formData.email);
      if (formData.firstName) formDataToSend.append('FNAME', formData.firstName);
      if (formData.phone) formDataToSend.append('PHONE', formData.phone);
      if (formData.company) formDataToSend.append('COMPANY', formData.company);
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
        company: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        id="email"
        label={translate('email')}
        type="email"
        value={formData.email}
        onChange={(value) => {
          setFormData({ ...formData, email: value });
          if (emailError) setEmailError('');
        }}
        required
        error={emailError}
        emailInvalidMessage={translate('emailInvalid')}
        fieldRequiredMessage={translate('fieldRequired')}
      />

      <FormInput
        id="firstName"
        label={translate('firstName')}
        value={formData.firstName}
        onChange={(value) => setFormData({ ...formData, firstName: value })}
      />

      <FormInput
        id="phone"
        label={translate('phone')}
        type="tel"
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
      />

      <FormInput
        id="company"
        label={translate('media')}
        value={formData.company}
        onChange={(value) => setFormData({ ...formData, company: value })}
        helperText={translate('ideallyUrl')}
      />

      <FormInput
        id="city"
        label={translate('city')}
        value={formData.city}
        onChange={(value) => setFormData({ ...formData, city: value })}
      />

      <Button type="submit" disabled={isSubmitting} className="w-full" rightIcon="lucide:send">
        {isSubmitting ? translate('sending') : translate('submit')}
      </Button>

      {submitStatus === 'success' && (
        <P className="text-green-600 text-base">{translate('successMessage')}</P>
      )}
      {submitStatus === 'error' && (
        <P className="text-red-600 text-base">{translate('errorMessage')}</P>
      )}
    </form>
  );
}
