This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Support subdomain (Vercel + GoDaddy)

The host-specific rewrite in `next.config.ts` serves `/support` at
`https://support.joinbacktobasics.com/`, keeping that URL in the browser.
Other hosts, including `apply.joinbacktobasics.com`, retain their existing routes.

1. Deploy this web app with the updated Next.js configuration to Vercel.
2. In that Vercel project's Settings → Domains, add
   `support.joinbacktobasics.com` as a production domain (not a redirect).
3. In GoDaddy DNS for `joinbacktobasics.com`, add a CNAME with name `support`
   and the exact target Vercel displays for that domain. Use the default TTL.
   Do not modify the apex (`@`), `www`, or `apply` records.
4. Wait for Vercel to verify DNS and provision HTTPS.
5. Confirm the support subdomain displays the support page, `/privacy` works,
   and the existing `apply` site still loads as before.

App Store Connect Support URL: `https://support.joinbacktobasics.com/`.

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
