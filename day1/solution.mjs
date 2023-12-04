export default function(values) {
  const numbersOnly = values.map(x => x.replace(/\D/g, ""));
  const convertedNumbers = numbersOnly.map(x => parseInt(x[0] + x[x.length - 1]));
  const total = convertedNumbers.reduce((partial, x) => partial + x, 0);
  return total;
};
