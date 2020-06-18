let hou=+prompt("Enter hours:")
let min=+prompt("Enter min:")
let sec=+prompt("Enter sec:")
if(hou>24||hou<0)
{
    console.log('wrong hours value')
}
else if(min>60||min<0)
{
    console.log('wrong minuters value')
}
else if(sec>60||sec<0)
{
    console.log('wrong seconds value')
}
else{
    console.log(`Hours - ${hou} Min - ${min} Sec - ${sec}`)
}