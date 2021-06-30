const listCount = {};

const mode = (list) => {
  list.map((item) => {
    if (listCount[item]) {
      listCount[item] += 1;
    } else {
      listCount[item] = 1;
    }
  });

  const listArr = Object.entries(listCount).sort(
    (accumulator, currentValue) => accumulator[1] - currentValue[1]
  );

  return listArr[listArr.length - 1];
};
