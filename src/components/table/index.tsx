import { Team } from '@/types/team'
import { useTeamStatsStore } from '@/store/match-history'

interface Props {
  team: Team[]
}

type SortTeam = Pick<Team, 'points' | 'goalDifference' | 'goalsFor'>;

const Table: React.FC<Props> = ({ team }) => {
  const allStats = useTeamStatsStore((state) => state.teamStats)

  const sortByCriteria = (a: SortTeam, b: SortTeam) => {
    if (b.points !== a.points) {
      return b.points - a.points
    } else if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference
    } else {
      return b.goalsFor - a.goalsFor
    }
  }

  const renderTableRows = () => {
    const data = allStats.length > 0 ? Object.values(allStats[0]).sort(sortByCriteria) : team

    return data.map((item, index) => (
      <tr key={index} className="bg-white bg-opacity-20 text-primary">
        <td className="px-6 py-4 text-center">{index + 1}</td>
        <td className="flex items-center px-6 py-4 whitespace-nowrap">
          <img src={item.imageUrl} alt={item.name} className='w-8 h-8' />
          <span className="ml-2 font-medium">{item.name}</span>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.played}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.won}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.drawn}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.lost}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.goalsFor}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.goalsAgainst}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.goalDifference}</td>
        <td className="px-6 py-4 font-semibold text-center whitespace-nowrap text-primary">{item.points}</td>
      </tr>
    ))
  }

  return (
    <table className="min-w-full text-sm text-gray-400">
      <thead className="text-xs font-medium text-gray-800 bg-gray-200">
        <tr>
          <th>Position</th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            Club
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            Played
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            Won
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            Drawn
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            Lost
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            GF
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            GA
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            GD
          </th>
          <th scope="col" className="px-6 py-3 tracking-wider text-center">
            Points
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">{renderTableRows()}</tbody>
    </table>
  )
}

export default Table
