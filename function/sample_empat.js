const dataBarang = [
  {
    name: "Uncharted 4",
    category: "Games",
    price: 500000,
    city: "Jakarta"
  },
  {
    name: "Adidas Jogger Pants",
    category: "Sport",
    price: 400000,
    city: "Tangerang"
  },
  {
    name: "Nike Superfly",
    category: "Running",
    price: 750000,
    city: "Bogor"
  },
  {
    name: "Man Shirt with Mandarin Collar",
    category: "Fashion",
    price: 350000,
    city: "Bandung"
  },
  {
    name: "Rise of Tomb Raider",
    category: "Games",
    price: 750000,
    city: "Jakarta"
  }
];

const hitungPajak = harga => {
  const totalHarga = harga * 0.15;
  return totalHarga;
};

const hitungOngkir = city => {
  let ongkir;

  if (city === "Jakarta") {
    ongkir = 10000;
  } else if (city === "Tangerang") {
    ongkir = 15000;
  } else if (city === "Bandung") {
    ongkir = 20000;
  } else if (city === "Bogor") {
    ongkir = 17000;
  }

  return ongkir;
};

const hitungDiskon = (harga, category) => {
  let hargaDenganDiskon

  if (category === 'Fashion'){
    hargaDenganDiskon = harga * 0.4
  } else if (category === 'Games'){
    hargaDenganDiskon = harga * 0.15
  } else if (category === 'Sport'){
    hargaDenganDiskon = harga * 0.25
  } else {
    hargaDenganDiskon = harga * 0.5
  }

  return hargaDenganDiskon
};

const hitungTotalHargaBarang = (
  originalPrice,
  taxAja,
  shippingFeeAja,
  discountAja
) => {
  const totalPriceNett = originalPrice + taxAja + shippingFeeAja - discountAja;
  return totalPriceNett;
};

dataBarang.map((item, idx) => {
  const namaBarang = item.name;
  const priceBarang = item.price;
  const city = item.city;
  const kategori = item.category

  const pajakSaja = hitungPajak(priceBarang);
  const diskonSaja = hitungDiskon(priceBarang, kategori);
  const ongkirSaja = hitungOngkir(city);
  const totalHargaBarang = hitungTotalHargaBarang(
    priceBarang,
    pajakSaja,
    ongkirSaja,
    diskonSaja
  );

  console.log(`${namaBarang} ${kategori} total harganya ${totalHargaBarang}`)
});


// Challenge
// Pembagian diskon: Fashion diskon 40%, Games diskon 15%, Sport diskon 25%, 
// selain itu diskon 5%