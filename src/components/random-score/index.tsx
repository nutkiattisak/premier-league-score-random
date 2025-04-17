import React, { useState } from 'react'
import { Team } from '@/types/team'
import { useMatchWeek } from '@/store/match-day'
import { useTeamStatsStore } from '@/store/match-history'
interface Props {
  team: Team[]
}

const RandomScore: React.FC<Props> = ({ team }) => {
  const setMatchWeek = useMatchWeek((state) => state.setMatchWeek)
  const resetMatchWeek = useMatchWeek((state) => state.resetMatchWeek)

  const matchWeek = useMatchWeek((state) => state.matchWeek)

  const allStats = useTeamStatsStore((state) => state.teamStats)
  const { addMatchResult, resetStats } = useTeamStatsStore((state) => state)

  const [teamRandom, setTeamRandom] = useState<Array<[Team, Team]>>([])

  const shuffleAndAssignScores = (teamArray: Team[], defaultScore = false) => {
    const shuffledTeam = [...teamArray].sort(() => Math.random() - 0.5)
    const randomizedTeams: Array<[Team, Team]> = []

    const team: Team[] = []

    for (let i = 0; i < shuffledTeam.length; i += 2) {
      const scoreTeamA = defaultScore ? 0 : Math.floor(Math.random() * 5)
      const scoreTeamB = defaultScore ? 0 : Math.floor(Math.random() * 5)
      const teamA = { ...shuffledTeam[i], score: scoreTeamA }
      const teamB = {
        ...shuffledTeam[i + 1],
        score: scoreTeamB,
      }

      team.push({
        name: teamA.name,
        abbr: teamA.abbr,
        imageUrl: teamA.imageUrl,
        played: matchWeek + 1,
        won: teamA.score > teamB.score ? 1 : 0,
        lost: teamA.score < teamB.score ? 1 : 0,
        drawn: teamA.score === teamB.score ? 1 : 0,
        goalsFor: teamA.score,
        goalsAgainst: teamB.score,
        goalDifference: teamA.score - teamB.score,
        points: teamA.score > teamB.score ? 3 : teamA.score === teamB.score ? 1 : 0,
      })

      team.push({
        name: teamB.name,
        abbr: teamB.abbr,
        imageUrl: teamB.imageUrl,
        played: matchWeek + 1,
        won: teamB.score > teamA.score ? 1 : 0,
        lost: teamB.score < teamA.score ? 1 : 0,
        drawn: teamB.score === teamA.score ? 1 : 0,
        goalsFor: teamB.score,
        goalsAgainst: teamA.score,
        goalDifference: teamB.score - teamA.score,
        points: teamB.score > teamA.score ? 3 : teamB.score === teamA.score ? 1 : 0,
      })
      randomizedTeams.push([teamA, teamB])
    }

    if (allStats.length > 0) {
      const targetResult: Team[] = team.map((currentTeam) => {
        // ค้นหาข้อมูลเก่าของทีมโดยใช้ชื่อ
        const oldStats = allStats.find(stat => stat.name === currentTeam.name)
        
        if (!oldStats) {
          return currentTeam
        }
        
        return {
          name: currentTeam.name,
          abbr: currentTeam.abbr,
          imageUrl: currentTeam.imageUrl,
          played: oldStats.played + 1, // เพิ่มจำนวนนัดที่เล่น
          won: currentTeam.won + oldStats.won, // รวมคะแนนชนะ
          lost: currentTeam.lost + oldStats.lost, // รวมคะแนนแพ้
          drawn: currentTeam.drawn + oldStats.drawn, // รวมคะแนนเสมอ
          goalsFor: currentTeam.goalsFor + oldStats.goalsFor, // รวมประตูได้
          goalsAgainst: currentTeam.goalsAgainst + oldStats.goalsAgainst, // รวมประตูเสีย
          goalDifference: (currentTeam.goalsFor - currentTeam.goalsAgainst) + oldStats.goalDifference, // คำนวณผลต่างประตูใหม่
          points: currentTeam.points + oldStats.points, // รวมคะแนน
        }
      })
      
      addMatchResult(targetResult)
    } else {
      addMatchResult(team)
    }

    return randomizedTeams
  }

  const randomizeScores = (): void => {
    const randomizedTeams = shuffleAndAssignScores(team)
    setTeamRandom(randomizedTeams)
    setMatchWeek()
  }

  const resetMatch = () => {
    setTeamRandom([])
    resetMatchWeek()
    resetStats()
  }

  return (
    <>
      {teamRandom.length > 0 && (
        <div className="container py-4 mt-3 rounded-lg">
          <>
            {teamRandom.map((item, key) => (
              <div className={`grid grid-cols-2 gap-4 ${key !== 0 && 'mt-4'}`} key={key}>
                <div className="flex items-center justify-end bg-gray-200 gap-x-4">
                  <div className="flex items-center gap-2">
                    <span className="hidden md:block">{item[0].name}</span>
                    <span className="block md:hidden">{item[0].abbr}</span>
                    <img src={item[0].imageUrl} alt={item[0].name} className="w-8 h-8" />
                  </div>
                  <div className="flex items-center justify-center text-xl text-white w-9 h-9 bg-primary">
                    {item[0].score}
                  </div>
                </div>
                <div className="flex items-center justify-start gap-4 bg-gray-200 gap-x-4">
                  <div className="flex items-center justify-center text-xl text-white w-9 h-9 bg-primary">
                    {item[1].score}
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={item[1].imageUrl} alt={item[1].name} className="w-8 h-8" />
                    <span className="hidden md:block">{item[1].name}</span>
                    <span className="block md:hidden">{item[1].abbr}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>
      )}

      <div className="flex justify-center mt-4">
        {matchWeek < (team.length - 1) * 2 ? (
          <button
            type="button"
            onClick={randomizeScores}
            className="p-3 text-white rounded-lg bg-primary"
          >
            Random
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={resetMatch}
              className="p-3 text-white rounded-lg bg-primary"
            >
              Reset
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default RandomScore
