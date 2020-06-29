const privatUrl = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
const placeholderUrl = "https://jsonplaceholder.typicode.com/photos"
window.onload = async () => {
    let responce = await fetch(privatUrl)
    let data = await responce.json()
    let UA = "<span>" + data[0].ccy + " by " + data[0].base_ccy + ":<br>Buy: " + data[0].buy + ":<br>Sale: " + data[0].sale + "</span>"
    document.querySelector(".my-header").innerHTML = UA
}

async function btnOnClick() {
    document.querySelector(".spinner").classList.remove("none")
    let respone = await fetch(placeholderUrl)
    let data = await respone.json();
    createPhoto(data, 10)
}
let cardLet = document.querySelector(".card")
let rowChild = document.querySelector(".row").children[0]

function createPhoto(data, number) {
    document.querySelector(".card").classList.remove("none")
    data.length = number;
    let cardImg = document.querySelector(".card").children[0]
    let cardTitle = document.querySelector(".card-body").children[0]
    let container = data.map((item) => {
        if (item.id == 1) {
            cardImg.src = `${item.thumbnailUrl}`
            cardTitle.innerHTML = `${item.title}`
        } else {
            let card2 = rowChild.cloneNode(true)
            let card = card2.children[0]
            card.children[0].src = `${item.thumbnailUrl}`
            card.children[1].children[0].innerHTML = `${item.title}`
            card2.append(card)
            return document.querySelector(".row").append(card2)
        }
    })
    document.querySelector(".spinner").classList.add("none")
}