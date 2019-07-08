export const formatCurrency = (numString) => {
  return "$" + parseInt(numString).toLocaleString();
}

export const formatPercentage = (numString) => {
  return numString + "%";
}