document.querySelector(".button").disabled = true

document.querySelector(".robot").addEventListener("click", function (event) {
    document.querySelector(".button").disabled = false
})

document.querySelector(".button").addEventListener("click", function (event) {
    // console.log("hello");
    let countText=0
    let countPass=0
    let div = document.querySelector("div");
    // console.log(div);
    let text = div.querySelectorAll('input[type="text"]')
    let mail = div.querySelector('input[type="email"]')
    div.querySelectorAll('input[type="text"],input[type="email"]').forEach((x) => {
        if (x.value == "") {
            x.classList.toggle("notvalid")
        }
        else{
            countText++
        }
       
    });
    let pas = div.querySelectorAll('input[type="password"]')
        
    div.querySelectorAll('input[type="password"]').forEach((x) => {
        if (x.value == "") {
            x.classList.toggle("notvalid")
        }
      else  if (pas[0].value != pas[1].value) {
            pas[0].value = ""
            pas[1].value = ""
        }
        else{
            countPass++
        }
        
    });

    if(countText==3&&countPass==2){
        document.body.querySelector("section").classList.add("dsp")
        let inpSect= document.body.querySelector("section").querySelectorAll("input")
        inpSect[0].value=text[0].value
        inpSect[1].value=text[1].value
        inpSect[3].value=mail.value
        div.querySelectorAll("input[type='radio']").forEach((x)=>{
            if(x.checked)
            inpSect[2].value=x.value
        })
    }
})