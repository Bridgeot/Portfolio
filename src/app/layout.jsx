import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/Context'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
    title: 'Bridget Gordon',
    description: 'Portfolio Site',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className={inter.className}>
          <ThemeProvider>
            <main className='app'>
                <Navbar />
                {children}
            </main>
          </ThemeProvider>
        </body>
    </html>
  )
}

export default RootLayout
