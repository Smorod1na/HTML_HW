let fruitArr=["limon","orange","apple","banana","tomato"]
let fruit=prompt("Enter frout")
fruitArr.sort()
document.write("<ul>")
let counter=0
for(let i=0;i<fruitArr.length;i++)
{
    if(fruit==fruitArr[i])
   { console.log(i)
counter++}
    document.write(`<li>${fruitArr[i]}</li>`)
}
document.write("</ul>")
if(counter==0)
console.log(-1)