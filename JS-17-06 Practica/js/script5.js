let Reciept = {
    name: "",
    description: "",
    DishType: "",
    Difficult: "",
    Ingredients: "",
    Servings: "",
    PrTime: "",
    CocTime: ""
}
let test= document.forms[0]
console.log(test.elements)
document.querySelector(".name")
console.log(test.elements)
function CheckForm(){
    let check=0
    for(let i=0;i<test.elements.length;i++)
    {
        if(test.elements[i].value=="")
      { test.elements[i].classList.add("borderRed")
    check++;}
    }
    if(check==0)
    ShowRecip()
}
function ShowRecip(){
    document.getElementById('name').innerText=Reciept.name
    document.getElementById('dish').innerText=Reciept.DishType
    switch(Reciept.DishType)
    {
        case 'Breakfast': document.getElementById('recipImg').src='img/dinner.jpg';
        break;
        case 'Lanch': document.getElementById('recipImg').src='img/lanch.jfif';
        break;
        case 'Dinner': document.getElementById('recipImg').src='img/breakfast.jpg';
        break;
    }
    document.getElementById('peop').innerText=Reciept.Servings
    document.getElementById('peop1').innerText=Reciept.PrTime+'min';
    document.getElementById('peop2').innerText=Reciept.Difficult
    document.getElementById('peop3').innerText=Reciept.CocTime
    document.getElementById('descrp').innerHTML="<b>Description:</b><br>"+Reciept.description
    document.getElementById('ingrid').innerHTML="<b>Ingridients:</b><br>"+Reciept.Ingredients
}
document.querySelector("input[type='button']").addEventListener("click", () => {
    Reciept.name = document.querySelector(".name").value
    Reciept.description = document.querySelector(".desc").value
    
    Reciept.DishType = document.querySelector(".dishT").value
    let radioChildren = document.querySelectorAll("input[type='radio']")

    console.log(radioChildren)
    for (let i = 0; i <radioChildren.length; i++) {
        if (radioChildren[i].checked == true)
           {Reciept.Difficult =radioChildren[i].value;    

    }
    }
    Reciept.Ingredients = document.querySelector(".ingred").value
    Reciept.Servings = document.querySelector(".serv").value
    Reciept.PrTime = document.querySelector(".serv1").value
    Reciept.CocTime = document.querySelector(".serv2").value
    CheckForm()
})