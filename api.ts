export async function getUpcomingFixtures({ limit = 50 } = {}) {
  const now = Date.now()
  const fixtures = Array.from({ length: Math.min(limit, 20) }).map((_, i) => {
    const kickoff = new Date(now + (i + 1) * 86400 * 1000).toISOString()
    return {
      id: `m-${i}`,
      slug: `team-a-vs-team-b-${i}`,
      home: { name: `Team A ${i}`, logo: '' },
      away: { name: `Team B ${i}`, logo: '' },
      kickoff,
      stadium: 'Main Stadium',
      competition: i % 2 === 0 ? 'Premier League' : 'Friendly'
    }
  })
  return fixtures
}
export async function getFixturesByLeague(league: string) {
  const all = await getUpcomingFixtures({ limit: 50 })
  return all.filter(f => f.competition.toLowerCase().includes(league.replace('-', ' ')))
}
export async function getMatchBySlug(slug: string) {
  const all = await getUpcomingFixtures({ limit: 50 })
  return all.find(f => f.slug === slug) || null
}
