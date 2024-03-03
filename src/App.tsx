import './App.css'
import Table from '@/components/table'
import RandomScore from '@/components/random-score'
import Header from '@/components/header'
import { useMatchWeek } from '@/store/match-day'
import { team } from '@/constants/team'
const App: React.FC = () => {
  const MatchWeek = useMatchWeek((state) => state.matchWeek)

  return (
    <>
      <div className='bg-pink'>
        <Header title="Premier League" />
        <div className="container px-6 mx-auto h-dvh">
          {MatchWeek > 0 && <h2 className="mt-4 text-xl font-semibold">Matchweek {MatchWeek}</h2>}
          {team && (
            <>
              <RandomScore team={team} />
              <div className="flex flex-col mt-6">
                <div className="mb-6 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded-lg shadow">
                      <Table team={team} />
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
