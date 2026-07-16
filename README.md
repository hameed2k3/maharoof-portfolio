# Maharoof Portfolio

Professional portfolio for Maharoof Abdullathif built with Next.js, Tailwind CSS, and a Gmail-ready contact form for Vercel deployment.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Nodemailer contact route

## Local Development

1. Install dependencies.
2. Create `.env.local` from `.env.example`.
3. Run the dev server.

```bash
pnpm install
pnpm dev
```

If `pnpm` blocks build scripts in your environment, approve them or run the local `next` binary directly after install.

## Contact Form Environment Variables

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your_16_digit_app_password
CONTACT_FROM_EMAIL=yourgmail@gmail.com
CONTACT_TO_EMAIL=yourgmail@gmail.com
```

Notes:

- Gmail app passwords require 2-Step Verification on the Google account.
- On Vercel, add these variables in Project Settings -> Environment Variables.
- After changing environment variables in Vercel, redeploy the project.

## Deployment

This project is ready for Vercel Hobby deployment.

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

## Content Notes

- The public site intentionally omits sensitive details from the resume, including passport number, marital status, and full date of birth.
- Replace the `MA` monogram block with a high-resolution portrait later if desired.
