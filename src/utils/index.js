/** Truncate string lenght */
export const truncateString = (str, limit = 40) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

export const truncateStringSmall = (str, limit = 25) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

/** Parse number to CLP currency */
export const parseToCLPCurrency = (number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(number);
};

/** Parse CLP to UF */
export const clpToUf = (clpValue, ufValue) => {
  return (Math.round((clpValue / ufValue) * 100) / 100000).toFixed(2);
};
