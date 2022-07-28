let email = 'kursat.karsli@hotmail.com';

console.log('EMAİL', email)


//Birleştirme

let ad = "Kursat"
let soyad = "Karsli"

let fullname = ad + " " + soyad
console.log('FULL NAME', fullname[0])

//length
console.log('lenght', fullname.length)

//lowercase
console.log(fullname.toLowerCase())
//uppercase
console.log(fullname.toUpperCase())
//indexof
console.log('indexof', fullname.indexOf('K'))

//lastindexof
console.log(fullname.lastIndexOf('K'))

//slice

console.log(fullname.slice(1, 3))

// replace

console.log(fullname.replace('k', 't'))

//replaceall

console.log(fullname.replaceAll(' ', ''))