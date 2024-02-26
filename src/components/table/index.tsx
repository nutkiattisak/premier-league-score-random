import { Team } from '@/types/team'

interface Props {
  team: Team[];
}

const Table: React.FC<Props> = ({ team }) => {
  const renderTableRows = () => {
    return team.map((item) => (
      <tr key={item.id} className="bg-white bg-opacity-20">
        <td className="px-6 py-4 text-center">{item.id}</td>
        <td className="flex px-6 py-4 whitespace-nowrap">
          <span className="ml-2 font-medium">{item.name}</span>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.played}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.won}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.drawn}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.lost}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.goalsFor}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.goalsAgainst}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.goalDifference}</td>
        <td className="px-6 py-4 text-center whitespace-nowrap">{item.points}</td>
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
