const notlar = [15, 45, 32, 0, 100, 99]

for (let i = 0;i < notlar.length;i++) {
    if (notlar[i] == 32) continue;

    console.log(notlar[i])
    if (notlar[i] === 100) {
        console.log('EN yüksek not')
        break
    }
}