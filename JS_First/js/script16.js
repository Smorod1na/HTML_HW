let digit=parseInt(prompt("Enter digit"))
if((typeof digit)=="number")
{
    let factorial=1
    while(digit>0)
    {
        factorial*=digit
        digit--
    }
    console.log(factorial)
}