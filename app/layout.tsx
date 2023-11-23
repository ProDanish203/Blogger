import type { Metadata } from 'next'
import './globals.css'
import { Footer, Header } from '@/components/shared'
import { Theme } from "@/store/Theme";

export const metadata: Metadata = {
  title: 'Blogger V2 | Discover latest blogs',
  description: 'on Blogger V2, you can find the latest blogs on the various topics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      </head>
      <body >
      <Theme>
        <main className='bg-bg dark:bg-darkBg'>

        <Header/>
        
        <main className='max-w-[1500px] mx-auto p-4'>
          {children}
        </main>

        <Footer/>
        </main>
      </Theme>
      </body>
    </html>
  )
}
