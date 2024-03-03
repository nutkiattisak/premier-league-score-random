export interface Team {
  id?: number
  name: string
  abbr?: string
  played: number
  won: number
  drawn: number
  lost: number
  goalsFor: number
  goalsAgainst: number
  goalDifference: number
  points: number
  score?: number
  imageUrl?: string
}
