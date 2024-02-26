import React, { useState, useEffect } from 'react'
import { Team } from '@/types/team'

interface Props {
  team: Team[]
}

const RandomScore: React.FC<Props> = ({ team }) => {
  const [teamRandom, setTeamRandom] = useState<Array<[Team, Team]>>([]);

  const shuffleAndAssignScores = (teamArray: Team[], defaultScore = false) => {
    const shuffledTeam = [...teamArray].sort(() => Math.random() - 0.5)
    const randomizedTeams: Array<[Team, Team]> = [];

    for (let i = 0; i < shuffledTeam.length; i += 2) {
      const teamA = { ...shuffledTeam[i], score: defaultScore ? 0 : Math.floor(Math.random() * 5) }
      const teamB = { ...shuffledTeam[i + 1], score: defaultScore ? 0 : Math.floor(Math.random() * 5) }

      randomizedTeams.push([teamA, teamB])
    }

    return randomizedTeams
  }

  const randomizeScores = (): void => {
    const randomizedTeams = shuffleAndAssignScores(team)
    setTeamRandom(randomizedTeams)
  }

  useEffect(() => {
    const randomizedTeams = shuffleAndAssignScores(team, true)
    setTeamRandom(randomizedTeams)
  }, [])

  return (
    <>
      <div className="container px-6 py-4 mt-3 rounded-lg bg-pink">
        {teamRandom.map((item, key) => (
          <div className={`grid grid-cols-2 gap-4 ${key !== 0 && 'mt-4'}`} key={key}>
            <div className="flex items-center justify-end bg-gray-200 gap-x-4">
              <div>{item[0].name}</div>
              <div className="flex items-center justify-center text-xl text-white w-9 h-9 bg-primary">
                {item[0].score}
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 bg-gray-200 gap-x-4">
              <div className="flex items-center justify-center text-xl text-white w-9 h-9 bg-primary">
                {item[1].score}
              </div>
              <div>{item[1].name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={randomizeScores}
          className="p-3 text-white rounded-lg bg-primary"
        >
          Random
        </button>
      </div>
    </>
  )
}

export default RandomScore
