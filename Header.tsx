import Link from 'next/link'
export default function Header() {
  return (
    <header className="bg-white shadow-sm mb-6">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Footy Fixtures</Link>
        <nav className="space-x-4">
          <Link href="/fixtures">Fixtures</Link>
          <Link href="/leagues/premier-league">Premier League</Link>
          <Link href="/leagues/champions-league">Champions League</Link>
        </nav>
      </div>
    </header>
  )
}
