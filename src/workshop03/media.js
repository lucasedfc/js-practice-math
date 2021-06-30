let media;

const calculateMean = (list) => {
  let total = 0;
  total = list.reduce((accumulator = 0, currentValue) => {
    return (accumulator += currentValue);
  });

  const mean = total / list.length;
  return mean;
};

const calculateMedia = (list) => {
  const orderedList = list.sort((a, b) => a - b);
  const halfList = parseInt(orderedList.length / 2);

  if (evenNumber(orderedList.length)) {
    const elem1 = orderedList[halfList];
    const elem2 = orderedList[halfList - 1];
    media = calculateMean([elem1, elem2]);
  } else {
    media = orderedList[halfList];
  }
};

const evenNumber = (num) => {
  return num % 2 === 0 ? true : false;
};
