// Study case
const hitungPajak = harga => {
    const totalHarga = harga * 0.15
    return totalHarga
};

const hitungOngkir = city => {
    // Jakarta 10000, Tangerang 15000, Bandung 20000, Bogor 17000
    let ongkir

    if (city === 'Jakarta'){
        ongkir = 10000
    } else if (city === 'Tangerang'){
        ongkir = 15000
    } else if (city === 'Bandung'){
        ongkir = 20000
    } else if (city === 'Bogor'){
        ongkir = 17000
    }

    return ongkir
}

const hitungDiskon = harga => {
    const hargaWithDiskon = harga * 0.1  // 10%
    return hargaWithDiskon
}

const hitungTotalHargaBarang = (originalPrice, taxAja, shippingFeeAja, discountAja) => {
    const totalPriceNett = originalPrice + taxAja + shippingFeeAja - discountAja
    return totalPriceNett
}



const hargaSepatu = 650000
const kota = 'Jakarta'

const pajakSaja = hitungPajak(hargaSepatu)
const diskonSaja = hitungDiskon(hargaSepatu)
const ongkirSaja = hitungOngkir(kota)
const totalHargaBarang = hitungTotalHargaBarang(hargaSepatu, pajakSaja, ongkirSaja, diskonSaja)
console.log(totalHargaBarang)