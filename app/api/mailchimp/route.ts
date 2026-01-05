import { NextResponse } from 'next/server';
import { addToMailchimpList } from '@/lib/mailchimp';

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { listId, email, ...data } = body;

    if (!listId || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await addToMailchimpList(listId, email, data);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

