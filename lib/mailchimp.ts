interface MailchimpMember {
  email_address: string;
  status: 'subscribed' | 'unsubscribed' | 'cleaned' | 'pending';
  merge_fields?: {
    FNAME?: string;
    LNAME?: string;
    PHONE?: string;
    CITY?: string;
  };
  tags?: string[];
}

export async function addToMailchimpList(
  listId: string,
  email: string,
  data: {
    firstName?: string;
    city?: string;
    phone?: string;
    joinOffline?: boolean;
    joinOnline?: boolean;
    canTakePart?: boolean;
  }
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const serverPrefix = process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !serverPrefix) {
    return { success: false, error: 'Mailchimp configuration missing' };
  }

  const tags: string[] = [];
  if (data.joinOffline) tags.push('join-offline');
  if (data.joinOnline) tags.push('join-online');
  if (data.canTakePart) tags.push('can-take-part');

  const member: MailchimpMember = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: data.firstName,
      CITY: data.city,
      PHONE: data.phone,
    },
    tags: tags.length > 0 ? tags : undefined,
  };

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(member),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return { success: false, error: errorData.detail || 'Failed to add to list' };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

