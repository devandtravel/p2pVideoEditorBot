export const showDate = (date: Date) =>
  date.toISOString().split('T')[0].split('-').reverse().join('.')
