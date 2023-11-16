"use strict"
function solveEquation(a, b, c) {

    let arr = []
    let discriminant = b** 2 - 4 * a * c;

    if (discriminant < 0) {
        return arr;
}   else if (discriminant === 0) {
        const root = -b / (2 * a);
        arr.push (root);
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        arr.push (root1,root2);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
      percent = percent/100/12;

      let creditBody = amount - contribution;
      let monthlyPayment = creditBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
      let totalPayment = monthlyPayment * countMonths;

      totalPayment = Number(totalPayment.toFixed(2));

      return totalPayment;
}