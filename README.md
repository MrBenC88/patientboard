# Simple Patient Dash
Patient management dash built using Next, ShadCN, Supabase, Zod

## 🚀 Features

- Add new patient records
- View all patients in a responsive table
- Filter patients by status
- Click on a row to view full patient details in a modal
- Reusable form components with validation
- Toast notifications 
- Fully responsive UI with Tailwind & ShadCN

## 🧠 Assumptions

- Each patient has:
  - First, middle (optional), last name
  - Date of birth
  - Status (`Inquiry`, `Onboarding`, `Active`, `Churned`)
  - Address
- "View data" means table + modal, not full CRUD
- No auth/user management included
- Supabase used as a drop-in DB 
- Repository pattern allows future DB swaps
- Modal is preferred over page route for quick patient views

<details>
<summary>Screenshots</summary>

<br />


![Dashboard](https://github.com/user-attachments/assets/9d7b0a0b-2ff0-483e-8134-ce5eefcbb6d8)


![Add Patient](https://github.com/user-attachments/assets/f68dfaa3-e139-4cea-9a47-22f0b8f5dbe1)


![View Patients](https://github.com/user-attachments/assets/40c367f6-9892-491e-8690-94f7e7ab80af)


![Patient Modal](https://github.com/user-attachments/assets/b879b281-9109-4bd4-b97d-38963ad1d2e9)

</details>



## Quick Setup

1. Create an .env.local
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

2. Spin up a supabase db 

3. Create patient table in supabase
```
create table patients (
  id uuid primary key default gen_random_uuid(),
  firstname text,
  middlename text,
  lastname text,
  dob text,
  status text,
  address text
);
```

4. Run the app
```
npm install
npm run dev
```
--

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
