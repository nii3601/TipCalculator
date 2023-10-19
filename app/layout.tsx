import './globals.css'

import {Inter} from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      {/* <p>This is a test to see if env variables passed{process.env.TEST_ENV}</p> */}
        {children}
        <footer className='flex flex-row items-center justify-center text-white bg-slate-900 py-4'>Made with NextJS by Jonathan Lamptey</footer>
      </body>
    </html>
  )
}
