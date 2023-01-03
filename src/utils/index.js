/** Truncate string lenght */
export const truncateString = (str, limit = 25) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

/** Parse number to CLP currency */
export const parseToCLPCurrency = (number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(number);
};
