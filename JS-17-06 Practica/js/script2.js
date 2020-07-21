let arrColor=["red","green","purple","orange","yellow","darkBlue"]
let a=0
document.querySelector("input[type='button']").addEventListener("click",()=>{
    if(a>=arrColor.length)
    a=0
    let div=document.createElement("div")
    div.classList.add("block")
    div.style.backgroundColor=arrColor[a]
    a++
  let col=  document.querySelector(".Colorblock").appendChild(div)
divDel(div)

})
function divDel(value){
    value.addEventListener("click",()=>{
        console.log(value);
   value.remove()
    
    })
}

