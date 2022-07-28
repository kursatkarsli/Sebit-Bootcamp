const yeniSifre = 'sadsaddsasadsad'

if (yeniSifre.length > 12) console.log('Şifre GÜçlü')
else if (yeniSifre.length >= 8 && yeniSifre.length <= 12) console.log('yeterli')
else console.log('Şifre yenile')