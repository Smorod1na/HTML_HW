let one=parseInt(prompt("Enter first digit"))
let two=parseInt(prompt("Enter second digit"))
let max;
if((typeof one)=="number"&&(typeof two)=="number")
{
    if(one>two)
    max=one
    else
    max=two

    while(max>"0")
    {
        if(one%max=="0"&&two%max=="0")
        console.log(max)
        max--
    }
}