const starwarsData = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY",
  gender: "male",
  homeworld: "https://swapi.co/api/planets/1/",
  films: [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  species: ["https://swapi.co/api/species/1/"],
  vehicles: [
    {
        name: "motor",
        image: "https://swapi.co/api/vehicles/14/",
        color: "red"
    }, {
        name: "spaceship",
        image: "https://swapi.co/api/vehicles/30/",
        color: "white"
    }, {
        name: "excavator",
        image: "https://swapi.co/api/vehicles/30/",
        color: "yellow"
    }
  ],
  starships: [
    "https://swapi.co/api/starships/12/",
    "https://swapi.co/api/starships/22/"
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.co/api/people/1/"
};

// 'Luke Skywalker' with 'blond' hair is a 'male'. He have 2 vehicles, 'red' 'motor' and 'white' 'spaceship'. 
// His height is '172'.

let dataVehicles = ''
starwarsData.vehicles.map((dataObject, idx) => {
    console.log(idx, starwarsData.vehicles.length)

    const andPhrase = idx === starwarsData.vehicles.length - 1 ? '' : ' and '  // Ternery operator
    const warnaKendaraan = dataObject.color
    const namaKendaraan = dataObject.name
    const dataKendaraanTiapIdx = `${warnaKendaraan} ${namaKendaraan}`

    dataVehicles = dataVehicles + dataKendaraanTiapIdx + `${andPhrase}`
})

const phrase = `${starwarsData.name} with ${starwarsData.hair_color} is a ${starwarsData.gender}. He have 2 vehicles, ${dataVehicles}. His height is ${starwarsData.height} `
console.log(phrase)


// const angkaSatu = 8
// const angkaDua = 5
// const hasil_ = angkaSatu === 8 ? ('Ya') : ('Tidak')
// console.log(hasil_)