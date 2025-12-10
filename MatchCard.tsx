import Link from 'next/link'
export default function MatchCard({ match }: { match: any }) {
  return (
    <Link href={`/matches/${match.slug}`} className="block bg-white p-4 rounded shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{match.home.name} vs {match.away.name}</div>
          <div className="text-sm text-gray-600">{new Date(match.kickoff).toLocaleString()}</div>
        </div>
        <div className="text-right">
          <div className="text-sm">{match.competition}</div>
          <div className="text-xs text-gray-500">{match.stadium || 'TBC'}</div>
        </div>
      </div>
    </Link>
  )
}
