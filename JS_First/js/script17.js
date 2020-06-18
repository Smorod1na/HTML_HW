let digit = parseInt(prompt("Enter digit"))
if ((typeof digit) == "number") {
    let counter = 0
    let digit2 = digit
    while (digit2 > 0) {
        if (digit % digit2 == 0)
            counter++
        digit2--
    }
    if (counter == 2)
        console.log("simple")
    else
        console.log("not simple")
}