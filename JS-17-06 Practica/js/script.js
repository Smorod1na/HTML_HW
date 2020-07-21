let btnDiv=document.querySelector(".button")
console.log(btnDiv.children)
for(let i=0;i<btnDiv.children.length;i++)
{
    btnDiv.children[i].addEventListener("click",()=>changeNumber(btnDiv.children[i].value)
    )
}

function changeNumber(value){
    console.log(value)
    if(value=="+")
   {
       document.querySelector("input[type='text']").value++
    }
    else{
        document.querySelector("input[type='text']").value--
    }
}



