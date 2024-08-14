const btnMinus = document.querySelector(".btn-quantity-minus");
const btnPlus = document.querySelector(".btn-quantity-plus");
const form = document.querySelector("form");
const btnSortear = document.querySelector(".btn-sortear");

let second = 3

form.addEventListener("submit", (event) => {
    event.preventDefault()

    timer()

    removeAllElementChild("circle-result")

})

const date = () => {
    const data = new Date()
    const dateFormated = data
    .toLocaleString("pt-Br")
    return dateFormated
}

// const resetPage = () => {
//     location.reload()
// }

// document.querySelector(".btn-clear").addEventListener("click", resetPage);

const increaseValue = () => {
    const input = document.querySelector("#quantity-input");
    let valueFormatted = Number(input.value)
    input.value = valueFormatted += 1;
}

const decrementValue = () => {
    const input = document.querySelector("#quantity-input");
    let valueFormatted = Number(input.value)
    input.value = valueFormatted -= 1

    if (valueFormatted < 1) {
        input.value = 1
    }
}

const sorteio = () => {
    const numerosSorteados = [];

    const inputMinValue = document.querySelector("#min-input")
    const minValueFormated = Number(inputMinValue.value)

    const inputMaxValue = document.querySelector("#max-input")
    const maxValueFormated = Number(inputMaxValue.value)

    const inputQuantity = document.querySelector("#quantity-input");
    const quantityValueFormatted = Number(inputQuantity.value)

    for (let i = 0; i < quantityValueFormatted; i++) {
        const randomNumbers = Math.round(Math.random() * (maxValueFormated - minValueFormated) + minValueFormated)
        numerosSorteados.push(randomNumbers)
    }

    numerosSorteados.forEach((number) => {
        const newSpan = document.createElement("span")
        newSpan.className = "result-final"
        document.querySelector('.circle-result').appendChild(newSpan)
        newSpan.innerHTML = `${number}`
    })

}

const removeClass = (className) => {
    document.querySelector(`.${className}`).classList.remove(className)
}

const addClass = (element, classNameAdd) => {
    document.querySelector(element).classList.add(classNameAdd)
}

const removeAllElementChild = (className) => {
    document.querySelector(`.${className}`).innerHTML = ``
}

const timer = () => {
    addClass("#hidden", "hidden")
    addClass("#box-timer-hidden", "box-timer-hidden")

    btnSortear.textContent = "SORTEANDO  .  .  ."
    removeClass("box-timer-hidden")

    const timerDecrement = setInterval(() => {
        second -= 1
        document.querySelector(".timer").innerHTML = `${second}`

        if (second === 0) {
            clearInterval(timerDecrement)
            document.querySelector(".timer").innerHTML = ``
            removeClass("hidden")
            btnSortear.textContent = "SORTEAR"
            sorteio()
            document.querySelector(".date").innerHTML = date()
            return
        }
        
    }, 800);
    second = document.querySelector(".timer").innerHTML = 3
}

btnPlus.addEventListener("click", increaseValue);
btnMinus.addEventListener("click", decrementValue);
// document.querySelector(".limpar").addEventListener("click", resetPage);