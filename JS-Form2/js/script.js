// let div=document.querySelector(".first-div")
let ul = document.querySelectorAll(".down-ul")
let sp = document.querySelectorAll(".test")
// console.log(div.classList)
// console.log(ul.classList)
// div.querySelector("a").style.color="white"
// div.querySelector("a").style.textTransform="uppercase"
// div.querySelector("i").style.paddingRight="20px";
let div2 = document.querySelectorAll(".first-div")
for (let i = 0; i < div2.length; i++) {
    div2[i].addEventListener("mouseover", function () {
        sp[i].querySelector("i").classList.remove("fa-caret-right")
        sp[i].querySelector("i").classList.add("fa-caret-down", "bcColor")

    });
    div2[i].addEventListener("mouseout", function () {
        sp[i].querySelector("i").classList.add("fa-caret-right")
        sp[i].querySelector("i").classList.remove("fa-caret-down", "bcColor")
    });
    div2[i].addEventListener("click", function () {
        sp[i].querySelector("i").classList.toggle("fa-caret-left")
        ul[i].classList.toggle("display-no");
    });

    ul[i].querySelectorAll("li").forEach((x) => x.addEventListener("mouseover", function () {
        this.classList.toggle("transition")
    }));
    ul[i].querySelectorAll("li").forEach((x) => x.addEventListener("mouseout", function () {
        this.classList.toggle("transition")
    }));
}
