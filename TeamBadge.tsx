export default function TeamBadge({ team }: { team: any }) {
  return (
    <div className="flex items-center gap-2">
      <img src={team.logo || '/images/placeholder-team.svg'} alt={team.name} className="w-8 h-8 rounded" />
      <span className="font-medium">{team.name}</span>
    </div>
  )
}
