// Looping or iteration or perulangan

const cars = ["Toyota", "Mitsubishi", "Honda", "Suzuki", "Aston", "Ferrarri"];

// // map
// cars.map((dataSaya, idx) => {
//   const nama = "Yogie";
//   const dataHasil = `${dataSaya} is ${nama}'s car`;
//   const dataHasilBeda = dataSaya + " is " + nama + " car";
//   console.log(dataHasil);
//   console.log(dataHasilBeda);
// });

// // for-loop
// for (let a = 0; a < cars.length; a++) {
//   console.log(`${cars[a]} is a great car!`);
// }

const carsInfo = [
  {
    brand: "Suzuki",
    type: "Ertiga",
    year: 2017,
    category: "MPV"
  },
  {
    brand: "Mitsubishi",
    type: "Mirage",
    year: 2015,
    category: "Small Hatchback"
  },
  {
    brand: "Honda",
    type: "Jazz",
    year: 2012,
    category: "Hatchback"
  },
  {
    brand: "Toyota",
    type: "Yaris",
    year: 2014,
    category: "Hatchback"
  },
  {
    brand: "Honda",
    type: "Civic",
    year: 2018,
    category: "Sedan"
  }
];

// map
carsInfo.map((mobils, idx) => {
  console.log(`${mobils.category}`);
});

console.log("================");

// for-loop
for (let b = 0; b < carsInfo.length; b++) {
  console.log(`${carsInfo[b].category}`);
}
