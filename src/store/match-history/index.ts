import { create } from 'zustand'
import { Team } from '@/types/team'

interface TeamStatsStoreState {
  teamStats: Team[]
  addMatchResult: (matchResult: Team[]) => void
  resetStats: () => void
}

export const useTeamStatsStore = create<TeamStatsStoreState>((set) => ({
  teamStats: [],

  addMatchResult: (matchResults) =>
    set((state) => {
      const updatedTeamStats = [...state.teamStats];

      matchResults.forEach((result) => {
        const existingTeamIndex = updatedTeamStats.findIndex(
          (team) => team.name === result.name
        );

        if (existingTeamIndex !== -1) {
          updatedTeamStats[existingTeamIndex] = {
            ...updatedTeamStats[existingTeamIndex],
            ...result,
          };
        } else {
          updatedTeamStats.push(result);
        }
      });
      return { teamStats: updatedTeamStats };
    }),

  resetStats: () => set({ teamStats: [] }),
}))
