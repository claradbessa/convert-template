// Cotação de moedas do dia
const USD = 5.81
const EUR = 6.09
const GBP = 7.38

// Obtendo os elementos 
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})


// Captando o evento de submit (enviar) do formulário
form.onsubmit = () => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função para covnerter a moeda
function convertCurrency(amount, price, symbol){
    try {
        // atualizando a cotação da moeda
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // aplica a classe que exibe o footer/resultado
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        footer.classList.remove("show-result") // remove a classe do footer, fazendo com que não apareça na tela.
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

// formata a moeda em real brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
    })
}