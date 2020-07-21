window.onload = () => {
    let myProduct = JSON.parse(localStorage.getItem('SelectProduct'))
    document.getElementById('name').innerText = myProduct.name
    let productImage = './img/' + myProduct.icon + ".png"
    document.getElementById('productImg').src = productImage
    for (let i = 0; i < 4; i++) {
        document.getElementById('divAttach').innerHTML += `<img class='imgTest' src=${productImage}>`;
    }
    document.querySelector('.tryCatchH3').children[0].innerText = myProduct.name
    document.getElementById('price').innerText ="$"+ myProduct.price
    
    document.querySelector('#div-1-right').innerHTML='<i class="fas fa-eye"></i>' + myProduct.view+'<br>'
    for (let j = 0; j < 5; j++) {
        if (j < myProduct.rating - 1) {
            document.querySelector('#div-1-right').innerHTML += '<i class="fas fa-star"></i>'
        } else {
            document.querySelector('#div-1-right').innerHTML += '<i class="far fa-star"></i>'
        }
    }
   let v=document.createElement('h3');
   console.log(myProduct)
   v.innerText='$'+myProduct.price
   document.querySelector('#div-2-right').append(v)
   document.querySelector('#rate').innerText=myProduct.rating
   document.querySelector('#review').innerText=myProduct.reviews.length
   document.querySelector('#sale').innerText=myProduct.sales
   document.querySelector('#time').innerText=myProduct.time_deliv
   document.querySelector('.blue').innerHTML+='  <i class="fas fa-arrow-right"></i>'
   document.querySelector('.Sname').innerHTML+=myProduct.author.name
   document.querySelector('#loc').innerHTML+=myProduct.author.location
   document.querySelector('#lang').innerHTML+=myProduct.author.Lang
   document.querySelector('#bio').innerHTML+=myProduct.author.Bio

}