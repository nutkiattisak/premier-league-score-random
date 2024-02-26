import './App.css'
import Table from '@/components/table'
import RandomScore from '@/components/random-score'
import Header from '@/components/header'
import { Team } from '@/types/team'
import { useQuery } from '@tanstack/react-query'

const App: React.FC = () => {
  const fetchData = async () => {
    try {
      const url =
        'https://raw.githubusercontent.com/nutkiattisak/premier-league-score-random/main/README.md'
      const response = await fetch(url)
      const text = await response.text()
      const parsedTeams = parseTeamData(text)

      return parsedTeams
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const { data } = useQuery({
    queryKey: ['team'],
    queryFn: fetchData,
    staleTime: 5000,
  })

  const parseTeamData = (text: string): Team[] => {
    return text
      .split('\n')
      .filter((item) => item.trim() !== '')
      .map((item, index) => {
        const name = item.split('- ')[1]
        return {
          id: index + 1,
          name: name,
          played: 0,
          won: 0,
          drawn: 0,
          lost: 0,
          goalsFor: 0,
          goalsAgainst: 0,
          goalDifference: 0,
          points: 0,
          score: 0,
        }
      })
  }

  return (
    <>
      <div>
        <Header title="Premier League" />
        <div className="container mx-auto">
          {data && (
            <>
              <RandomScore team={data} />
              <div className="flex flex-col mt-6">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow sm:rounded-lg">
                      <Table team={data} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
