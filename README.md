This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_MAILCHIMP_USER_ID=your_user_id
NEXT_PUBLIC_MAILCHIMP_SERVER=us16
NEXT_PUBLIC_MAILCHIMP_FORM_ID=your_form_id
NEXT_PUBLIC_MAILCHIMP_LIST_ID_DEMONSTRATIONS=your_demonstrations_list_id
NEXT_PUBLIC_MAILCHIMP_LIST_ID_MEDIA=your_media_list_id
NEXT_PUBLIC_MAILCHIMP_LIST_ID_PARTNERS=your_partners_list_id
DISCORD_URL=your_discord_invite_url
```

These values can be extracted from your Mailchimp form embed code URL:
- `NEXT_PUBLIC_MAILCHIMP_USER_ID`: The `u` parameter in the form URL
- `NEXT_PUBLIC_MAILCHIMP_SERVER`: The server prefix (e.g., `us16`)
- `NEXT_PUBLIC_MAILCHIMP_FORM_ID`: The `f_id` parameter in the form URL
- `NEXT_PUBLIC_MAILCHIMP_LIST_ID_*`: The `id` parameter for each list

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
