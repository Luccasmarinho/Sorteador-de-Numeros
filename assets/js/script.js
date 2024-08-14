const btnMinus = document.querySelector(".btn-quantity-minus");
const btnPlus = document.querySelector(".btn-quantity-plus");
const form = document.querySelector("form");
const btnSortear = document.querySelector(".btn-sortear");

let second = 3

form.addEventListener("submit", (event) => {
    event.preventDefault()

    timer()

    // document.querySelector(".hidden").classList.remove("hidden")
    // document.querySelector(".box-timer-hidden").classList.remove("box-timer-hidden")
    // sorteio()


})

const resetPage = () => {
    location.reload()
}

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
        // document.querySelector(".result-final").innerHTML = `${numerosSorteados.join(", ")}`
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

const timer = () => {
    btnSortear.textContent = "SORTEANDO  .  .  ."
    removeClass("box-timer-hidden")
    const timerDecrement = setInterval(() => {
        second -= 1
        document.querySelector(".timer").innerHTML = `${second}`
        if (second < 1) {
            clearInterval(timerDecrement)
            document.querySelector(".timer").innerHTML = ``
            removeClass("hidden")
            btnSortear.textContent = "SORTEAR"
            sorteio()
        }
    }, 900);
}

btnPlus.addEventListener("click", increaseValue);
btnMinus.addEventListener("click", decrementValue);


