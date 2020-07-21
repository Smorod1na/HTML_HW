let arrColor = ["red", "green", "purple", "orange", "yellow", "darkBlue", "cyan", "blue", "bisque", "brown", "grey", "darkgrey", "tomato", "aquamarine"]
for (let i = 0; i < arrColor.length; i++) {
    let div = document.createElement("div")
    div.classList.add("block")
    div.style.backgroundColor = arrColor[i]
    let one= div.dataset.datacolor = arrColor[i]
     console.log(one)
    document.querySelector(".color").appendChild(div)
    changeTextColor(div)
}

function changeTextColor(value){
    value.addEventListener("click",()=>{
        document.querySelector("p").style.color=value.dataset.datacolor    
    })
}



