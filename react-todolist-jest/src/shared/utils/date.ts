export const getToday = (value?: string | number | Date): Date => {
  return new Date(value ?? Date.now());
};

export const formatDate = (date = getToday(), separate = '-') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatMonth = month < 10 ? `0${month}` : month;
  const formatDay = day < 10 ? `0${day}` : day;

  return `${year}${separate}${formatMonth}${separate}${formatDay}`;
};

export const formatStringToDate = (dateString: string, separate = '-') => {
  const [year, month, day] = dateString.split(separate);
  return new Date(Number(year), Number(month) - 1, Number(day));
};

export const calculateDaysUntil = (date = getToday()) => {
  const now = getToday();
  const distance = date.getTime() - now.getTime();
  return Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
};
