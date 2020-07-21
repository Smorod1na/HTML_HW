let proWorks;
let categories = ""
window.onload = () => {
    fetch('./Json/products.json').then(responce => {
        return responce.json();
    }).then(data => {
        proWorks = data
        ProductsOnLoad()
    })
    fetch('./Json/categories.json').then(responce => {
        return responce.json()
    }).then(data => {
        console.log(data)
        CategoriesLoad(data)
    })
}
let divRow = document.getElementById("rowId")
let line = document.createElement('hr')
line.className = "line"

function ProductsOnLoad() {
    for (let i = 0; i < proWorks.data.length; i++) {
        let div = document.createElement('div')
        div.className = "col-6 col-sm-4 col-md-2"
        div.style.padding="0 5px"
        let divelse = document.createElement('div')
        divelse.className = "classCard"
        let img = document.createElement('img')
        img.src = './img/' + proWorks.data[i].icon + ".png"
        img.setAttribute('width', "100%")
        let h6 = document.createElement('h6')
        h6.innerText = proWorks.data[i].name
        let mydiv = document.createElement('div')
        let a = document.createElement('a')
        a.innerText = proWorks.data[i].author.name

        let mydiv2 = document.createElement('div')
        let div1 = document.createElement('div')
        let span = document.createElement('span')
        let span1 = document.createElement('span')
        span.innerHTML = '<i class="fas fa-eye"></i>' + proWorks.data[i].view
        span1.innerText = "$" + proWorks.data[i].price

        let div2 = document.createElement('div')
        let anotherSpan = document.createElement('span')
        let anotherSpan2 = document.createElement('span')
        for (let j = 0; j < 5; j++) {
            if (j < proWorks.data[i].rating - 1) {
                anotherSpan.innerHTML += '<i class="fas fa-star"></i>'
            } else {
                anotherSpan.innerHTML += '<i class="far fa-star"></i>'
            }
        }
        anotherSpan.innerHTML += "(" + proWorks.data[i].voted + ")"
        anotherSpan2.innerHTML = '<i class="fas fa-save"></i>'

        div1.append(span)
        div1.append(span1)
        div2.append(anotherSpan)
        div2.append(anotherSpan2)

        divelse.append(img)
        mydiv.append(h6)
        divelse.append(mydiv)
        divelse.append(line.cloneNode(true))
        mydiv2.append(a)
        divelse.append(mydiv2)
        divelse.append(line.cloneNode(true))
        divelse.append(div1)
        divelse.append(div2)
        div.append(divelse)
        divRow.append(div)
    }
    divRow.innerHTML += '<button type="button" class="btn btn-primary" id="btnProducts">View all proworks</button>'
    document.getElementById("btnProducts").onclick = () => {
        window.location.href = "products.html";
    }
}

let ttt = document.querySelector('.divCategories')

function CategoriesLoad(data) {
    categories = data
    for (let i = 0; i < data.data.length; i++) {
        let testDiv = document.createElement('div')
        testDiv.innerText = data.data[i].name
        ttt.append(testDiv)
    }
}
let divDrop = document.querySelector(".myClassForDD")
let tes = document.querySelector("li");
let sss = document.querySelector(".first-Div")
let sss1 = document.querySelector(".second-Div")
document.querySelector("li").addEventListener("mousemove", function () {
    divDrop.style.opacity = "1"
    if (sss.children.length < 1) {
        for (let i = 1; i < categories.data.length; i++) {
            let a = document.createElement('a')
            a.className = "dropdown-item"
            console.log(i)
            a.innerText = categories.data[i].name
            sss.append(a)
        }
    }
})
document.querySelector(".myClassForDD").addEventListener("mouseout", function () {
    divDrop.style.opacity = "0"
})

document.querySelector(".myClassForDD").addEventListener("mouseover", function () {
    divDrop.style.opacity = "1"
})