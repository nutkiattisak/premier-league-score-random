import { create } from 'zustand'
import { Team } from '@/types/team'

interface TeamStatsStoreState {
  teamStats: Team[]
  addMatchResult: (matchResult: Team) => void
  resetStats: () => void
}

export const useTeamStatsStore = create<TeamStatsStoreState>((set) => ({
  teamStats: [],

  addMatchResult: (matchResult) =>
    set((state) => {
      const existingTeamIndex = state.teamStats.findIndex((team) => team.name === matchResult.name)

      if (existingTeamIndex !== -1) {
        return {
          teamStats: state.teamStats.map((team, index) =>
            index === existingTeamIndex ? { ...team, ...matchResult } : team
          ),
        }
      } else {
        return { teamStats: [...state.teamStats, matchResult] }
      }
    }),

  resetStats: () => set({ teamStats: [] }),
}))
