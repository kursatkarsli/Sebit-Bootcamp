const button = document.querySelector('#buttonId')
// const button = document.getElementById('buttonId')
const listItem = document.querySelectorAll('li')
const ulDeğerim = document.querySelector('ul')
//İlk yöntem
// button.onclick = () => {
//     console.log('HELLO')
// }

// ikinci yöntem


listItem.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.style.backgroundColor !== 'white') item.style.background = "white"

        else if (e.target.innerHTML.toLowerCase() === 'react') item.style.background = "yellow"
        else if (e.target.innerHTML.toLowerCase() === 'vue') item.style.background = "red"
        else if (e.target.innerHTML.toLowerCase() === 'angular') item.style.background = "pink"
        else if (e.target.innerHTML.toLowerCase() === 'Javascript') item.style.background = "green"



    })
})

// listItem.forEach(eleman => {
//     eleman.addEventListener('click', e => {
//         e.target.remove()
//     })
// })


const liEleman = document.createElement('li');
liEleman.textContent = 'Javascript';
liEleman.style.backgroundColor = 'white'
// append sona eleman ekler
// prepend başa eleman ekler


function add () {
    const liEleman = document.createElement('li');
    liEleman.textContent = 'Javascript';
    liEleman.style.backgroundColor = 'white'
    ulDeğerim.append(liEleman)
    ulDeğerim.prepend(liEleman)

}