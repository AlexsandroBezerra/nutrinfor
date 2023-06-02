export const DEFAULT_WEIGTH = 100

export function calculateWeight(x: number, weigth: number): number {
  return (x * weigth) / DEFAULT_WEIGTH
}
