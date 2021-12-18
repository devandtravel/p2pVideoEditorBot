export const showDate = (date) => date.toISOString().split('T')[0].split('-').reverse().join('.');
