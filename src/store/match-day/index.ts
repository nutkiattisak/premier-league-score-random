import { create } from 'zustand';

interface MatchWeekStoreState {
  matchWeek: number;
  setMatchWeek: () => void;
  resetMatchWeek: () => void;
}

export const useMatchWeek = create<MatchWeekStoreState>((set) => ({
  matchWeek: 0,
  setMatchWeek: () => set((state) => ({ matchWeek: state.matchWeek + 1 })),
  resetMatchWeek: () => set({ matchWeek: 0 }),
}));
