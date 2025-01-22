# Photo Gallery Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development Server

Run the development server:

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

## Configuring Supabase

This project relies on [Supabase](https://supabase.com) for storage and database functionality. To set up Supabase for this project:

1. Create a Supabase account and project if you haven't already.
2. Configure a bucket named `gallery-images` for storing uploaded files.
3. Set up a table named `images` with the following schema:
   - `id`: `uuid` (Primary Key, Default: `uuid_generate_v4()`)
   - `name`: `text`
   - `url`: `text`
   - `created_at`: `timestamp` (Default: `now()`)
4. Update the `.env.local` file with your Supabase URL and API key:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-key
```

### Note

If the Supabase database is inactive or has been disabled (as this project was used for study purposes), you might encounter errors when interacting with the database. You may need to set up a new Supabase project as described above.

## Features

- Upload photos to the gallery
- Display photos from the database
- Responsive grid layout

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

