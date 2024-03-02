import { create } from 'zustand';

interface MatchWeekStoreState {
  MatchWeek: number;
  setMatchWeek: () => void;
  resetMatchWeek: () => void;
}

export const useMatchWeek = create<MatchWeekStoreState>((set) => ({
  MatchWeek: 0,
  setMatchWeek: () => set((state) => ({ MatchWeek: state.MatchWeek + 1 })),
  resetMatchWeek: () => set({ MatchWeek: 0 }),
}));
