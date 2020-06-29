let url
let login=document.querySelector("input[type='text'")
let GitInfo={
    Name:"",
    Login:"",
    Url:"",
    Blog:"",
    City:"",
    Email:"",
    Flowwers:0,
    Following:0
}

async function btnOnclick(){
    if(login.value=="")
    console.log("No login")
    else{
        url="https://api.github.com/users/"+login.value
        let responce = await fetch(url)
        let data = await responce.json()
        if(data.name!=null)
        document.querySelector(".name").innerHTML=data.name
        document.querySelector(".Login").innerHTML=data.login
        document.querySelector(".url").innerHTML=data.url
        if(data.blog!="")
        document.querySelector(".blog").innerHTML=data.blog
        // if(data.location!=null)
        let responce1 = await fetch(data.repos_url)
        let data1 = await responce1.json()
        document.querySelector(".city").innerHTML=data1.length
        // for(let i=0;i<data.repos_url.length;i++)
        // console.log(data.repos_url[i])


        if(data.emeil!=null)
        document.querySelector(".email").innerHTML=data.email
        document.querySelector(".followers").innerText=data.followers
        document.querySelector(".following").innerHTML=data.following
        document.querySelector("img").src=`${data.avatar_url}`
    }
}