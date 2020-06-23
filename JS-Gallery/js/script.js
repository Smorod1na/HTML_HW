let arrPicture = ["url(../img/1.jpg)", "url(../img/2.jpg)", "url(../img/3.jpg)", "url(../img/4.jpg)", "url(../img/5.jpg)",
    "url(../img/6.jpg)", "url(../img/7.jpg)", "url(../img/8.gif)", "url(../img/9.jpg)", "url(../img/10.jpg)",
    "url(../img/11.jpg)", "url(../img/12.jpg)",
]

let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
for (let i = 0; i < div2.children.length; i++) {
    div2.children[i].addEventListener("mousemove", function (e) {
        this.style.transform = "scale(1.2)";
    })
    div2.children[i].addEventListener("mouseout", function (e) {
        this.style.transform = "scale(1.0)";
    })
    div2.children[i].addEventListener("click", function (e) {
        div1.style.backgroundImage = `url(../img/` + this.getAttribute('picture') + ')'
        div1.setAttribute("picture", `url(../img/` + this.getAttribute('picture') + ')');
    })
}
for (let i = 0; i < div1.children.length; i++) {
    div1.children[i].addEventListener("mousemove", function (e) {
        this.style.opacity = 1
    })
    div1.children[i].addEventListener("mouseout", function (e) {
        this.style.opacity = 0.5
    })
}
let left = document.querySelector(".left").addEventListener("click", function (e) {
    for (let i = 11; i >= 0; i--) {

        if (div1.getAttribute("picture") == arrPicture[i]) {

            if (i == 0) {
                console.log(div1.getAttribute("picture"))
                div1.style.backgroundImage = arrPicture[11]
                div1.setAttribute("picture", arrPicture[11])
                break;
            } else {
                console.log("hello")
                div1.style.backgroundImage = arrPicture[i - 1]
                div1.setAttribute("picture", arrPicture[i - 1])
                break;
            }
        }
    }
})
let right = document.querySelector(".right").addEventListener("click", function (e) {
    for (let i = 0; i <12; i++) {

        if (div1.getAttribute("picture") == arrPicture[i]) {

            if (i == 11) {
                console.log(div1.getAttribute("picture"))
                div1.style.backgroundImage = arrPicture[0]
                div1.setAttribute("picture", arrPicture[0])
                break;
            } else {
                console.log("hello")
                div1.style.backgroundImage = arrPicture[i + 1]
                div1.setAttribute("picture", arrPicture[i + 1])
                break;
            }
        }
    }
})