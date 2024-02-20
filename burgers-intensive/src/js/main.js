const menuLinks = document.querySelectorAll("[data-link]")
const productBtns = document.querySelectorAll(".product-item__button")
let burgerType = document.getElementById("burgerType")
let clientName = document.getElementById("clientName")
let clientPhone = document.getElementById("clientPhone")
const submitOrder = document.getElementById("submitOrder")
let changeCurrency = document.getElementById("changeCurrency")
let burgerPrices = document.querySelectorAll("[data-base-price]")

menuLinks.forEach(element => {
    element.addEventListener("click", ()=> {
        const targerSection = element.dataset.link
        
        document.getElementById(`${targerSection}`).scrollIntoView({
            behavior: "smooth"
        })
    })
});

productBtns.forEach(element => {
    element.addEventListener("click", ()=> {
        document.getElementById("order").scrollIntoView({
            behavior: "smooth"
        })
    })
});

submitOrder.addEventListener("click", function(e) {
    e.preventDefault()
    let hasError = false;
    let formInputs = [burgerType, clientName, clientPhone]

    formInputs.forEach(element => {
        console.log(element)
        if (!element.value) {
            element.parentElement.style.background = "red"
            hasError = true
        } else {
            element.parentElement.style.background = ""
        }
    });

    if(!hasError) {
        formInputs.forEach(element => {
            element.value = ""
        })
        alert("Спасибо за заказ, мы скоро свяжемся с вами!")
    }
})

changeCurrency.addEventListener("click", function(e) {
    let currentCurrency = e.target.innerText

    let newCurrency = "$"
    let coefficient = 1

    if(currentCurrency === "$") {
        newCurrency = "₽"
        coefficient = 80
    } else if (currentCurrency === "₽") {
        newCurrency = "BYN"
        coefficient = 3
    } else if (currentCurrency === "BYN") {
        newCurrency = "€"
        coefficient = 0.9
    } else if (currentCurrency === "€") {
        newCurrency = "¥"
        coefficient = 6.9
    }

    e.target.innerText = newCurrency
    burgerPrices.forEach(element => {
        element.innerText = `${+(element.dataset.basePrice * coefficient).toFixed(1)} ${newCurrency}`
    });
})