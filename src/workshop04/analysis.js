// Utils

const isEven = (num) => {
  return num % 2 === 0;
};

const calculateMean = (list) => {
  let total = 0;
  total = list.reduce((accumulator = 0, currentValue) => {
    return (accumulator += currentValue);
  });

  const mean = total / list.length;
  return mean;
};

// Calculate Media Salaries

const calculateMediaSalaries = (list) => {
    const half = parseInt(list.length / 2);
  
    if (isEven(list.length)) {
      const mediumPerson = list[half - 1];
      const mediumPerson2 = list[half];
      return calculateMean([mediumPerson, mediumPerson2]);
    } else {
      const mediumPerson = list[half];
      return mediumPerson;
    }
  };

// General Media
const salariesArg = argentina.map((item) => {
  return item.salary;
});

const salariesArgSorted = salariesArg.sort((a, b) => {
  return a - b;
});

// Top 10 Media
const spliceStart = (salariesArgSorted.length * 90) / 100;
const spliceCount = salariesArgSorted.length - spliceStart;
const top10Salaries = salariesArgSorted.splice(spliceStart, spliceCount)


const top10MediaArg = calculateMediaSalaries(top10Salaries);
const generalMediaArg = calculateMediaSalaries(salariesArgSorted);

console.log(generalMediaArg, top10MediaArg);
