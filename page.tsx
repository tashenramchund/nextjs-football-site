import { getMatchBySlug } from '@/lib/api'
import { buildMatchSchema } from '@/lib/schema'
interface Props { params: { slug: string } }
export default async function MatchPage({ params }: Props) {
  const match = await getMatchBySlug(params.slug)
  if (!match) return <p>Match not found</p>
  const jsonLd = buildMatchSchema(match)
  return (
    <article>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <h1 className="text-3xl font-bold">{match.home.name} vs {match.away.name}</h1>
      <p className="text-sm text-gray-600">Kickoff: {new Date(match.kickoff).toLocaleString()}</p>
      <section className="mt-6">
        <h2 className="font-semibold">Match Info</h2>
        <ul className="list-disc pl-5">
          <li>Stadium: {match.stadium}</li>
          <li>Competition: {match.competition}</li>
          <li>Referee: {match.referee || 'TBC'}</li>
        </ul>
      </section>
    </article>
  )
}
export async function generateStaticParams() {
  const fixtures = await getUpcomingFixtures({ limit: 200 })
  return fixtures.map(f => ({ slug: f.slug }))
}
