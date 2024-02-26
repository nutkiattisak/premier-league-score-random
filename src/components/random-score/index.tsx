import { Team } from '@/types/team'

interface Props {
  team: Team[];
}

const RandomScore: React.FC<Props> = ({ team }) => {
  const transform = team.sort(() => Math.random() - 0.5)
  const teamRandom = []

  for (let i = 0; i < transform.length; i += 2) {
    teamRandom.push([transform[i], transform[i + 1]])
  }

  return (
    <>
      <div className="container px-6 py-4 mt-3 rounded-lg bg-pink">
        {teamRandom.map((item, key) => {
          return (
            <div className={`grid grid-cols-2 gap-4 ${key !== 0 && 'mt-4'}`} key={key}>
              <div className="flex items-center justify-end bg-gray-200 gap-x-4">
                <div className="">{item[0].name}</div>
                <div className="flex items-center justify-center text-xl text-white w-9 h-9 bg-primary">
                  0
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 bg-gray-200 gap-x-4">
                <div className="flex items-center justify-center text-xl text-white w-9 h-9 bg-primary">
                  0
                </div>
                <div className="">{item[1].name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RandomScore
