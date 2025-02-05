тThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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


вся обробка формуєтся за назвою деректорією APP? то вній формуємо папку яка і буде назвою шляху .
page.tsx в ньому міститься надписи на сторінці,а в layout.tsx містить фон
Якщо в проєкті є page.tsx то відображається він (layout.tsx-не являється обов'язковим)
Яко існує layout.tsx то він буде відображати layout.tsx і в себе відображати пропсу children підтягувати  page.tsx
,тобто компонувати він робить це самостійно.
шаблон

        export default function RootLayout({
         children,
           }: Readonly<{
              children: React.ReactNode;
                  }>) {
                   return (
              <html lang="en">
                  <body className={`${geistSans.variable} ${geistMono.variable}`}>
             {children}
                    </body>
             </html>
           );
         }
В одному layout.tsx можуть рендитися всі підрівні юзер..юзер.

Але на кожному субрівні наших юарел може існувати свій layout.tsx,але він не заміняє головного layout.tsx він
завжди доповнює тобто нашаровує його

в головному layout.tsx лежать створені в папці створені about page.tsx layout.tsx