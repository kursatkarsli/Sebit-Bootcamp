const formInputs = document.getElementsByClassName('form-check-input')
const percentage = document.getElementById('percentage')
const form = document.getElementById('submit')
console.log('FORM INPUTS', formInputs)

const inputs = Object.values(formInputs)
let score = 0

inputs.forEach(element => {

    element.addEventListener('change', () => {
        if (element.value === 'E') {
            score += 25

        }
        else {

            score -= 25
        }

    })
})
console.log('FORM', form)
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (score < 0) {
        score = 0
    }
    console.log('Score', score)

    percentage.innerText = "" + score + "%"
    document.getElementById('result').classList.remove('d-none')
})