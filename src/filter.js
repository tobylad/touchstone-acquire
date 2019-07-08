export const handleTargetFilter = (targets, filterType) => {
  let filteredTargets = [];

  if (filterType === "") {
    return targets;
  } else if (filterType === "Status: Approved") {
    filterByStatus(targets, filteredTargets, 1);
  } else if (filterType === "Status: Pending") {
    filterByStatus(targets, filteredTargets, 2);
  } else if (filterType === "Status: Researching") {
    filterByStatus(targets, filteredTargets, 3);
  } else if (filterType === "Status: Declined") {
    filterByStatus(targets, filteredTargets, 4);
  } else if (filterType === "Margin: High") {
    filterByMargin(targets, filteredTargets, "high");
  } else if (filterType === "Margin: Average") {
    filterByMargin(targets, filteredTargets, "average");
  } else if (filterType === "Margin: Low") {
    filterByMargin(targets, filteredTargets, "low");
  } else if (filterType === "Revenue: 9 figures+") {
    filterByRevenue(targets, filteredTargets, "9+");
  } else if (filterType === "Revenue: 7-8 figures") {
    filterByRevenue(targets, filteredTargets, "7-8");
  } else if (filterType === "Revenue: 6 figures-") {
    filterByRevenue(targets, filteredTargets, "<6");
  }

  return filteredTargets;
}

const filterByStatus = (targets, filteredTargets, statusCode) => {
  targets.filter((target) => {
    if (target.status === statusCode) {
      filteredTargets.push(target);
    }
    return target.status === statusCode;
  });

  return filteredTargets;
}

const filterByMargin = (targets, filteredTargets, marginLevel) => {
  if (marginLevel === "high") {
    targets.filter((target) => {
      if (target.margin > 20) {
        filteredTargets.push(target);
      }
      return target.margin > 20;
    });
  } else if (marginLevel === "average") {
    targets.filter((target) => {
      if (target.margin > 10 && target.margin < 20) {
        filteredTargets.push(target);
      }
      return target.margin > 10 && target.margin < 20;
    });
  } else if (marginLevel === "low") {
    targets.filter((target) => {
      if (target.margin < 10) {
        filteredTargets.push(target);
      }
      return target.margin < 10;
    });
  }

  return filteredTargets;
}

const filterByRevenue = (targets, filteredTargets, figures) => {
  if (figures === "9+") {
    targets.filter((target) => {
      if (target.revenue > 99999999) {
        filteredTargets.push(target);
      }
      return target.revenue > 99999999;
    });
  } else if (figures === "7-8") {
    targets.filter((target) => {
      if (target.revenue > 999999 && target.revenue < 100000000) {
        filteredTargets.push(target);
      }
      return target.revenue > 999999 && target.revenue < 100000000;
    });
  } else if (figures === "<6") {
    targets.filter((target) => {
      if (target.revenue < 1000000) {
        filteredTargets.push(target);
      }
      return target.revenue < 1000000;
    });
  }

  return filteredTargets;
}