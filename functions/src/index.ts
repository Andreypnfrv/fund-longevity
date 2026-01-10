import * as functions from 'firebase-functions';

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

export const api = functions.https.onRequest(async (req, res) => {
  const path = req.path.replace(/^\/api/, '');
  
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  if (path !== '/mailchimp') {
    res.status(404).json({ error: 'Not found' });
    return;
  }

  try {
    const { listId, email, ...data } = req.body;

    if (!listId || !email) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const apiKey = functions.config().mailchimp?.api_key;
    const serverPrefix = functions.config().mailchimp?.server_prefix;

    if (!apiKey || !serverPrefix) {
      res.status(500).json({ error: 'Mailchimp configuration missing' });
      return;
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
      res.status(500).json({ error: errorData.detail || 'Failed to add to list' });
      return;
    }

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

