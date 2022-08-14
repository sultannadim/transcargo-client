/**
 * object er bitore abar object likha jay
 * object er nested object er bitore abar object nested kora jay
 * object er bitore array likha jay
 * object er array er bitore o object likha jay
 * object er bitore function likha jay
 */

// example

const nayok = {
  name: "shakib khan",
  id: 1,
  movie: [1, 23],
  award: [
    { name: "bangla", year: 2010 },
    { name: "english", year: 2015 },
  ],
  movieList: {
    name: "no 1 shakib khan",
    year: 2010,
    cast: {
      hero: "shakib khan",
      heroin: "opu bishas",
    },
  },
  act: function () {
    console.log("number one shakib khan");
  },
};

console.log(nayok.award[0]);
