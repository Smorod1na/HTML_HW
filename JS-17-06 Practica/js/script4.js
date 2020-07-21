document.querySelector("input[type='button']").addEventListener("click", () => {

    let name = document.querySelector("input[type='text']").value

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let coment = document.querySelector("textarea").value
    if (name == "" || coment == "") {
        prompt("Enter name or comment")
    } else {
        let div1=document.createElement("div")
        let a = document.createElement("a")
        a.innerText = "Name: " + name
        document.querySelector(".postComment").appendChild(a)
        document.querySelector("input[type='text']").value = ""
        let b = document.createElement("a")
        b.innerText = "TimeNow:" + dateTime
        document.querySelector(".postComment").appendChild(b)
        
        let c = document.createElement("a")
        c.innerText = "Comment: " + coment
        document.querySelector(".postComment").appendChild(c)
        document.querySelector("textarea").value = ""
        div1.classList.add("line")
        document.querySelector(".postComment").appendChild(div1)
    }
})