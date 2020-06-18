let x=+prompt("Enter x:")
let y=+prompt("Enter y:")

if(x==0&&y==0)
{
console.log("On x")
}
else if(y==0)
{
    console.log("On y")
}
else if(x==0)
{
    console.log("On x")
}
else if(x>0&&y>0)
{
    console.log("On 1")
}
else if(x>0&&y<0)
{
    console.log("On 4")
}
else if(x<0&&y<0)
{
    console.log("On 3")
}
else
{
    console.log("On 2")
}

