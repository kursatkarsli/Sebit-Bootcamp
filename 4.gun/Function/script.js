function hello () {
    console.log('hello')
}

hello()

//parametre gönderme

const canboz = function (ad = 'can', soyad = 'Boz') {
    console.log(`ad soyad ${ad} ${soyad}`)
}

canboz('Kemal', 'Doğukan')
canboz()

const kareAlanı = function (kenar) {
    return kenar * kenar
}
let sonuc = kareAlanı(6)

console.log(sonuc)


/// Arrow Function
const karealanı = kenar => kenar ** 2
console.log(karealanı(7))
const karealanı1 = kenar => { return kenar ** 2 }
console.log(karealanı1(7))




// const urunsatis = function (urunler, vergi) {
//     let toplam = 0;
//     for (let i = 0;i < urunler.length;i++) toplam += urunler[i] + urunler[i] * vergi;
//     return toplam
// }

// const toplamfiyat = urunsatis([10, 20, 30], 0.25)

// console.log(toplamfiyat)

const urunsatis = (urunler, vergi) => {
    let toplam = 0;
    for (let i = 0;i < urunler.length;i++) { toplam += urunler[i] + urunler[i] * vergi; }
    return toplam
}

const toplamfiyat = urunsatis([10, 20, 30], 0.25)

console.log(toplamfiyat)