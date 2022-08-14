function getAverage(assinment1, assinment2, assinment3) {
  const total = assinment1 + assinment2 + assinment3;
  const myAverage = total / 3;
  return myAverage;
}
const assinment1Marks = 60;
const assinment2Marks = 60;
const assinment3Marks = 60;
const finalAverage = getAverage(
  assinment1Marks,
  assinment2Marks,
  assinment3Marks
);
console.log("My assainment averahe is : ", finalAverage);
