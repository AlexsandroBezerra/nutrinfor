export function formatValue(value: number, suffix?: string) {
  if (!Number(value)) {
    return '-'
  }

  let result = String(Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 4
  }).format(value))

  if (suffix) {
    result = result.concat(' ', suffix)
  }

  return result
}
