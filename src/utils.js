export const formatCurrency = (numString) => {
  return "$" + parseInt(numString).toLocaleString();
}

export const formatPercentage = (numString) => {
  return numString + "%";
}

export const modifyTargets = (targets, sortType) => {
  let modifiedTargets;

  if (sortType === "unsorted") {
    modifiedTargets = targets;
  } else if (sortType === "Revenue") {
    modifiedTargets = targets.sort((obj1, obj2) => {
      return obj2.revenue - obj1.revenue;
    });
  } else if (sortType === "Margin") {
    modifiedTargets = targets.sort((obj1, obj2) => {
      return obj2.margin - obj1.margin; 
    });
  } else if (sortType === "Name") {
    modifiedTargets = targets.sort((obj1, obj2) => {
      if (obj1.name < obj2.name) {
        return -1;
      } else if (obj1.name > obj2.name) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortType === "Status") {
    modifiedTargets = targets.sort((obj1, obj2) => {
      return obj1.status - obj2.status;
    })
  }

  return modifiedTargets;
}