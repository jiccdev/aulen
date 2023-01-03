export const truncateString = (str, limit) => {
  if (str.length > limit) {
    return `${str.substring(0, limit)}...`;
  } else {
    return str;
  }
};

// parse number to chilean currency
export const parseToCLPCurrency = (number) => {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(number);
};
