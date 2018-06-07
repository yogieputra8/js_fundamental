const angka_satu = 8;
const angka_dua = "8";

if (angka_satu === angka_dua) {
  console.log("ini sama lho!");
}

if (angka_satu == angka_dua) {
  console.log("sama juga");
}

// ===============================
const nilai_math = 60;

if (nilai_math >= 80) {
  console.log("Nilai anda A");
} else if (nilai_math >= 70 && nilai_math <= 79) {
  console.log("Nilai anda B");
} else if (nilai_math >= 59 && nilai_math <= 61) {
  console.log("Ga lulus lulus!");
} else if (nilai_math === 50 || nilai_math === 60) {
  console.log("Ga lulus dong!");
} else {
  console.log("Nilai anda C");
}
