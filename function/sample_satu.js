// Create functions
// functional programming
const perkalian = (a, b) => {
  const c = a * b;
  return c;
};

function pembagian(d, e) {
  const f = d / e;
  return f;
}

const penjumlahan = (x, y) => x + y;

const pengurangan = (z, k) => z - k;

// Call the function
// console.log( perkalian(4, 5) )

// const hasil_pembagian = pembagian(20, 10)
// console.log(hasil_pembagian)

// const hasil_penjumlahan = penjumlahan(2, 3)
// console.log(hasil_penjumlahan)

// ============================ //
const angkaSatu = 8;
const angkaDua = 16;
// 1. create functions perkalian, pembagian, penjumlahan, pengurangan
// 2. hasil_perkalian dibawa untuk pembagian
// 3. hasil_pembagian dibawa untuk penjumlahan
// perkalian, pembagian, penjumlahan
// 5, 2

const hasil_perkalian = perkalian(angkaSatu, angkaDua);
const hasil_pembagian = pembagian(hasil_perkalian, 5);
const hasil_penjumlahan = penjumlahan(hasil_pembagian, 2);
console.log(hasil_penjumlahan);
