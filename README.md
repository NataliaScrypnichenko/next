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




підходи рендеринг SSG Static site generation- сиатична
коли запит іде на сервер і там шукає сиорінку існуючу і потім іде наза нам. -статична сторінка.
цю сторінку запускаємо тут .. і створюється сторінка- це запускається наша локальна тимчасова версія -
(є продакшен версія вона запускається run build).
коли ми тут створили проєкт і запускаємо через (run build) то він пакується в робочу версію то тоді ми можемо його відправляти 
на сервер і він там може працювати.Коли ми робимо тобто ці сторінки запускаються і будуть з гегнеровані сторінки, і вони будуть статичними,
але за певних умов.
Певні умови це коли на сторінці немає динамічних запитів і також немає ревалідація -це процес коли в нас дані, на сторінці через певний момент
будуть пере підтягуватися.На цих сторінках може бути контент і запит який буде закешований

якщо є сторінки які не побудовані на динамічній запитів,які побудовані на основі параметрів url ,пошукових парамеьтів даних з наших урл
тобто сегментів динамічних =вони всі будуть генеруватися як статична сторінка.

SSG-це підхід для сторінок інформація на яких рідко оновлюється.


SSR-сервер сайт рендерів=сторінок на етапі коли відбувається запит.=на основі цього запиту сторінка будується
як статик і відправляється нам.