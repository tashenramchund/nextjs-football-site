export function buildMatchSchema(match: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    'name': `${match.home.name} vs ${match.away.name}`,
    'startDate': match.kickoff,
    'location': { '@type': 'Place', 'name': match.stadium || 'TBC' },
    'competitor': [
      { '@type': 'SportsTeam', 'name': match.home.name },
      { '@type': 'SportsTeam', 'name': match.away.name }
    ]
  }
}
