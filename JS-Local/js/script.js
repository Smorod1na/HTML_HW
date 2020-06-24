let user = {
    Name: "",
    Email: "",
    Login: "",
    Password: ""
}

document.querySelector("span").addEventListener("mousemove", function (event) {
    this.style.color = "white"
    
})
document.querySelector("span").addEventListener("mouseout", function (event) {
    this.style.color = "black"
})
document.querySelector("span").addEventListener("click", function (event) {
    let vis = document.querySelector("form")
    for (let i = 2; i < 4; i++) {
        console.log("hello")
        vis.children[i].classList.toggle("none")
    }
})
document.querySelector(".button2").addEventListener("mousemove", function (event) {
    this.style.backgroundColor = "white"
})
document.querySelector(".button2").addEventListener("mouseout", function (event) {
    this.style.backgroundColor = "black"
})
document.querySelector(".button2").addEventListener("click", function (event) {
    let formChild = document.forms[0]
    // console.log(formChild.elements)

    if (formChild.elements.namedItem("Name").value != "") {
        user.Name = formChild.elements.namedItem("Name").value
        if (formChild.elements.namedItem("Email").value != "") {
            user.Email = formChild.elements.namedItem("Email").value
            if (formChild.elements.namedItem("Login").value != "") {
                user.Login=formChild.elements.namedItem("Login").value
                if (formChild.elements.namedItem("Password").value != "") {
                    user.Password = formChild.elements.namedItem("Password").value
                    location.href = "page.html"
                    localStorage.setItem("user", JSON.stringify(user))
                    // let data= localStorage.getItem("user");
                    // console.log(data)
                }
                else{
                    confirm("Enter Password")
                }
            }
            else{
                confirm("Enter Login")
            }
        }
        else{
            confirm("Enter Email")
        }
    }
    else{
        confirm("Enter Name")
    }
})