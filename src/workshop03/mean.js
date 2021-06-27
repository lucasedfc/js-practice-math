const calculateMean = (list) => {
  let total = 0;
  /** FOR Way */
  /*
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  */

  /**MAP Way */
  /*
  list.map((item) => (total += item));
  */

  /**REDUCE Way */
  total = list.reduce((accumulator = 0, currentValue) => {
    return (accumulator += currentValue);
  });

  const mean = total / list.length;
  return mean;
};
