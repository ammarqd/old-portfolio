import { Share_Tech_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const shareTechMono = Share_Tech_Mono({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Ammar Qadir | Software Developer & Engineer',
  description: 'Portfolio of Ammar Qadir - Software Developer & Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={shareTechMono.className}>
        <div id="main-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}