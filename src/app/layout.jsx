import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Studywav - Digital Growth Solutions',
  description: 'Transform your digital presence with our expertise in web development, SEO, social media, and creative services.',
}

export default function RootLayout({
  children
}) {
  return (
    (<html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div
          className="fixed inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-black [background-size:32px_32px] opacity-25 pointer-events-none" />
        {children}
      </body>
    </html>)
  );
}

