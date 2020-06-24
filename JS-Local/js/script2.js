let user = {
    Name: "",
    Email: "",
    Login: "",
    Password: ""
}
let formChild = document.forms[0]
    let formChild1 = document.forms[1]
window.onload=()=>{
    let data= localStorage.getItem("user");
    console.log(data)

    user=JSON.parse(data)
    console.log(user)
    document.querySelector("a").innerText+=" "+ user.Name
    document.querySelector(".ball").innerText=user.Name.split("")[0]
    
    formChild.elements.namedItem("Name").value=user.Name
    formChild.elements.namedItem("Email").value=user.Email
    formChild.elements.namedItem("Login").value=user.Login
    formChild.elements.namedItem("Password").value=user.Password
    formChild1.elements.namedItem("OldPass").value=user.Password
}
function btnClick(){
if( formChild1.elements.namedItem("NewPass").value==formChild1.elements.namedItem("Confirm").value)
{
    user.Password=  formChild1.elements.namedItem("NewPass").value ;
     localStorage.setItem("user", JSON.stringify(user));

}
else{
    confirm("Enter correct pass")
}
}