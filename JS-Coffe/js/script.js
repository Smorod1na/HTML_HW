let CoffeUser = {
    name: "User",
    money: 100
}
function putMoney(){
    CoffeUser.money+=100
    document.getElementById("userMoney").innerText = CoffeUser.money
}
function getMoney(){
    document.getElementById("adminMoney").innerText=0
}
let IsAdmin = false;
function getCoffeUser(){
    Test.GetCoffe(parseInt(suggars.innerText))
}
function setCoffeUser(){
    Test.SetCoffe()
}
function getTeaUser(){
    Test.GetTea(parseInt(suggars.innerText))
}
function setTeaUser(){
    Test.SetTea()
}
function getBearUser(){
    Test.GetBear()
}
function setBearUser(){
    Test.SetBear()
}
document.querySelector("body").addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelector(".userInfo").classList.toggle("none")
        document.querySelector(".adminInfo").classList.toggle("none");
        IsAdmin = !IsAdmin;
        if (IsAdmin) {
            btnCofee.removeEventListener("click",getCoffeUser)
            btnCofee.addEventListener("click", setCoffeUser)
            btnTea.removeEventListener('click',getTeaUser)
            btnTea.addEventListener('click',setTeaUser)
            
            btnBear.removeEventListener('click',getBearUser)
            btnBear.addEventListener('click',setBearUser)
        } else {
            btnCofee.removeEventListener("click",setCoffeUser)
            btnCofee.addEventListener("click", getCoffeUser)
            btnTea.removeEventListener('click',setTeaUser)
            btnTea.addEventListener('click',getTeaUser)

            btnBear.removeEventListener('click',setBearUser)
            btnBear.addEventListener('click',getBearUser)
        }
       
    }
});



let suggars = document.getElementById("suggars")
let suggarsCount = document.getElementById("suggarsCount")
let coffeText = document.getElementById("coffeText")
let btnCofee = document.getElementById("coffe")
let btnTea = document.getElementById("tea")
let btnBear = document.getElementById("bear")
btnCofee.addEventListener("click",getCoffeUser)
btnTea.addEventListener('click', getTeaUser)
btnBear.addEventListener('click',getBearUser)
class CoffeMachine {
    constructor(money = 0, coffe = 2, tea = 2, bear = 2, suggar = 12) {
        this.money = money
        this.coffe = coffe
        this.tea = tea
        this.bear = bear
        this.suggar = suggar
    }
 
    GetCoffe(suggars) {

        if (CoffeUser.money > 8.5) {
            if (this.coffe == 0) {
                btnCofee.classList.remove("btn-success")
                btnCofee.classList.add("btn-danger")
                coffeText.innerText = "Sorri, no more coffe.Maybe you wont bear?"
            } else {
                this.coffe--
                this.suggar -= suggars
                CoffeUser.money -= 8.5
                suggarsCount.innerText = this.suggar
                document.getElementById("userMoney").innerText = CoffeUser.money
                document.getElementById("coffeCount").innerText -= 1
                coffeText.innerText = "Enjoy youre coffe"
                document.getElementById("adminMoney").innerText = parseFloat(document.getElementById("adminMoney").innerText )+8.5
            }


        } else {
            coffeText.innerText = "You dont have money"
        }
    }
    GetTea(suggars) {
        if (CoffeUser.money > 5) {
            if (this.tea == 0) {
                btnTea.classList.remove("btn-success")
                btnTea.classList.add("btn-danger")
                coffeText.innerText = "Sorri, no more tea.Maybe you wont bear?"
            } else {
                this.tea--
                this.suggar -= suggars
                CoffeUser.money -= 5
                suggarsCount.innerText = this.suggar
                document.getElementById("userMoney").innerText = CoffeUser.money
                document.getElementById("teaCount").innerText -= 1
                coffeText.innerText = "Enjoy youre tea"
                document.getElementById("adminMoney").innerText = parseFloat(document.getElementById("adminMoney").innerText )+5

            }


        } else {
            coffeText.innerText = "You dont have money"
        }
    }
    GetBear() {
        if (CoffeUser.money > 15.25) {
            if (this.bear == 0) {
                btnBear.classList.remove("btn-success")
                btnBear.classList.add("btn-danger")
                coffeText.innerText = "No more bear"

            } else {
                this.bear--
                CoffeUser.money -= 15.25
                document.getElementById("userMoney").innerText = CoffeUser.money
                document.getElementById("bearCount").innerText -= 1
                coffeText.innerText = "Enjoy youre bear"
                document.getElementById("adminMoney").innerText = parseFloat(document.getElementById("adminMoney").innerText )+15.25

            }

            // document.getElementById("coffeCount").innerText=parseInt(document.getElementById("coffeCount").innerText)+1

        } else {
            coffeText.innerText = "You dont have money"
        }
    }
    SetCoffe() {
        this.coffe++
        document.getElementById("coffeCount").innerText = this.coffe
    }
    SetTea() {
        this.tea++
        document.getElementById("teaCount").innerText = this.tea
    }
    SetBear() {
        this.bear++
        document.getElementById("bearCount").innerText = this.bear
    }
}
let Test = new CoffeMachine()

function BtnPlusClick() {
    if (suggars.innerText < parseFloat(suggarsCount.innerText))
        suggars.innerText = parseFloat(suggars.innerText) + 1
    else
        coffeText.innerText = "No more suggar"
}

function BtnMinusClick() {
    if (suggars.innerText > 0)
        suggars.innerText -= 1
}