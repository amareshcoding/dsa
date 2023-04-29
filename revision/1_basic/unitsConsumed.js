//Electricity consumption is measured via slab rates for a particular watt
//age capacity , which is as follows
// <=50 unit: 3 rupee per unit
// <=150 unit: 5 rupee per unit
// >150 unit: 10 rupee per unit
//Apart from the slab rates, a fixed charge of Rs 80 is also added to every bill
//You are given total amount of bill, N, you need to find total unit consumed

//input: 930
//output: 170

//Hint
//Fixed Charge: 80
//Charge for first 50 unit: 50 * 3 = 150
//Charge for next 100 unit: 100 * 5 = 500
//Charge for next 20 unit: 20 * 10 = 200
//Total Charges: 80 + 150 + 500 + 200 = 930

function unitsConsumed(billAmount) {
  let fixedCharge = 80;
  let billAfterFixedCharge = billAmount - fixedCharge;
  let unitConsumed = 0;

  if (billAfterFixedCharge > 650) {
    unitConsumed += 150;
    unitConsumed += (billAfterFixedCharge - 650) / 10;
  } else if (billAfterFixedCharge > 150) {
    unitConsumed += 50;
    unitConsumed += (billAfterFixedCharge - 150) / 5;
  } else {
    unitConsumed += (billAfterFixedCharge - 50) / 3;
  }
  return unitConsumed;
}
console.log(unitsConsumed(930));
