let productData;
let categoriesData;
window.onload = () => {
    fetch('./Json/products.json').then(responce => {
        return responce.json();
    }).then(data => {
        productData = data
        ProductsOnLoad(data)
    })
    fetch('./Json/categories.json').then(responce => {
        return responce.json()
    }).then(data => {
        categoriesData = data
        CategoriesLoad(data)
    })
}
let divLeft = document.querySelector(".divLeft")

function CategoriesLoad(categories) {
    console.log(categories.data)
    for (let i = 0; i < categories.data.length; i++) {
        let a = document.createElement('a')
        a.className = "dropdown-item"
        a.innerText = categories.data[i].name
        a.style.margin = "10px 0"
        a.setAttribute('prodId', categories.data[i].id)
        divLeft.append(a)
    }
    divLeft.innerHTML += "<h5>Tags</h5><a class='dropdown-item'>All tags</a>"
    DoSomething()
}

function DoSomething() {

    for (let i = 0; i < divLeft.children.length; i++) {
        console.log(divLeft.children[i])
        divLeft.children[i].onclick = testClick
    }
}




function testClick(event) {
    let count = divRow.children.length
    for (let i = 0; i < count; i++) {
        divRow.lastElementChild.remove()
    }
    let container;
    console.log(productData.data)
    for (let i = 0; i < productData.data.length; i++) {
        if (event.path[0].getAttribute('prodId') == 4 || 
        event.path[0].getAttribute('prodId') == 6  || 
        event.path[0].getAttribute('prodId') == 7||
        event.path[0].getAttribute('prodId')==11) {
            Cry();
            break;
        }
        if (productData.data[i].categoryId == event.path[0].getAttribute('prodId')) {
            container = productData.data[i]

            if (event.path[0].getAttribute('prodId') != 1)
                HelpFindProduct(container)
            else {
                ProductsOnLoad(productData)
            }
        }
    }

}
let divRow = document.getElementById("rowId")
let line = document.createElement('hr')
line.className = "line"

function ProductsOnLoad(proWorks) {
    let count = divRow.children.length
    if (divRow.children.length > 0) {
        for (let i = 0; i < count; i++)
            divRow.lastElementChild.remove()
    }
    for (let i = 0; i < proWorks.data.length; i++) {
        HelpFindProduct(proWorks.data[i])
    }



}

function Cry() {
    console.log('hello')
    let divelse = document.createElement('div')
    divelse.className = "d-flex justify-content-center"
    divelse.style.width = "100%"
    let img = document.createElement('img')
    img.src = './img/crying.png'
    divelse.append(img)
    divRow.append(divelse);
}

function HelpFindProduct(value) {
    let div = document.createElement('div')
    div.className = "col-6 col-sm-6 col-md-3"
    div.style.padding = "0 5px"
    let divelse = document.createElement('div')
    divelse.className = "classCard"
    let img = document.createElement('img')
    img.src = './img/' + value.icon + ".png"
    img.setAttribute('width', "100%")
    let h6 = document.createElement('h6')
    h6.innerText = value.name
    let mydiv = document.createElement('div')
    let a = document.createElement('a')
    a.innerText = value.author.name

    let mydiv2 = document.createElement('div')
    let div1 = document.createElement('div')
    let span = document.createElement('span')
    let span1 = document.createElement('span')
    span.innerHTML = '<i class="fas fa-eye"></i>' + value.view
    span1.innerText = "$" + value.price

    let div2 = document.createElement('div')
    let anotherSpan = document.createElement('span')
    let anotherSpan2 = document.createElement('span')
    for (let j = 0; j < 5; j++) {
        if (j < value.rating - 1) {
            anotherSpan.innerHTML += '<i class="fas fa-star"></i>'
        } else {
            anotherSpan.innerHTML += '<i class="far fa-star"></i>'
        }
    }
    anotherSpan.innerHTML += "(" + value.voted + ")"
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
    div.setAttribute('idProd', value.id)
    AddLocalProduct(div)
    divRow.append(div)
}

function AddLocalProduct(product) {
    product.onclick = () => {
        for (let i = 0; i < productData.data.length; i++) {
            if (productData.data[i].id == product.getAttribute('idProd')) {
                localStorage.setItem('SelectProduct', JSON.stringify(productData.data[i]))
                window.location = "productInfo.html"
            }
        }
    }
}