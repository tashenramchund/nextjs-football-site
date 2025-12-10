import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Football Fixtures — Upcoming Matches & Info',
  description: 'Fast, SEO-optimized football fixtures, match pages, team pages and where to watch.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
