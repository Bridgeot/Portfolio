import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
    title: 'Bridget Gordon',
    description: 'Portfolio Site',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className={inter.className}>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout
