/**
 * chair wood = 3 foot
 * table wood = 10 foot
 * bed wood = 50 foot
 * sobb gular total ber korte hobe
 */

function totalWood(chairQuantity, tableQuantity, bedQuantity) {
  const chairPerWood = 3;
  const tablePerWood = 10;
  const bedPerWood = 50;

  const chairWood = chairPerWood * chairQuantity;
  const tableWood = tablePerWood * tableQuantity;
  const bedWood = bedPerWood * bedQuantity;

  const totalWoods = chairWood + tableWood + bedWood;

  return totalWoods;
}

const result = totalWood(5, 5, 1);

console.log(result);
