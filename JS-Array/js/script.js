let arr1 = [2, -5, 9, 2, -4, 5, 34, -11, 2, -3, 4, 5, -6, 9]
let Negativesum = 0;
let maxC = {
    max: 0,
    count: 0
}
let minC = {
    min: 0,
    count: 0
}
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < minC.min) {
        minC.min = arr1[i]
        minC.count = i
    }
    if (arr1[i] > maxC.max) {
        maxC.max = arr1[i]
        maxC.count = i
    }
    if (arr1[i] < 0)
        Negativesum += arr1[i]
}
console.log(Negativesum)
let multMinMax = 1
if (minC.count > maxC.count) {
    for (let i = maxC.count + 1; i < minC.count; i++) {
        multMinMax *= arr1[i]
    }
} else {
    for (let i = minC.count + 1; i < maxC.count; i++) {
        multMinMax *= arr1[i]
    }
}
console.log(multMinMax)


let arr2 = [45, -65, 48, 52, -45, -78, -96, 25, 14, 25, 45]
maxC = {
    max: 0,
    count: 0
}
minC = {
    min: 0,
    count: 0
}
let pairSum = 1;
for (let i = 0; i < arr2.length; i++) {
    if (i % 2 == 0)
        pairSum *= arr2[i]
    if (arr2[i] < minC.min) {
        minC.min = arr2[i]
        minC.count = i
    }
    if (arr2[i] > maxC.max) {
        maxC.max = arr2[i]
        maxC.count = i
    }
}
console.log(pairSum)
let sumMinMax = 1
if (minC.count > maxC.count) {
    for (let i = maxC.count + 1; i < minC.count; i++) {
        sumMinMax += arr2[i]
    }
} else {
    for (let i = minC.count + 1; i < maxC.count; i++) {
        sumMinMax += arr2[i]
    }
}
console.log(sumMinMax)

let arr3=[45, 65, 48, 52, 45, -78, -96, 25, 14, 25, 45]
let sumDiv=0
maxC = {
    max: 0,
    count: 0
}
let sumAft=0
for (let i = 0; i < arr3.length; i++) {
    if (i % 2 == 0)
        pairSum *= arr2[i]
    if(arr3[i]<0)
    break;
    if (arr3[i] > maxC.max) {
        maxC.max = arr3[i]
        maxC.count = i
    }
    sumAft+=arr3[i]
}
console.log(maxC.count)
console.log(sumAft)

let arr100=[];
let sum100=0
function random(min,max)
{
return Math.trunc( Math.random()*(max-min+1)+min)
}
for(let i=0;i<100;i++)
{
    arr100[i]=random(-100,100)
    sum100+=arr100[i]
}
console.log(sum100)
let arr50=[];
let multNotPair=1
for(let i=0;i<50;i++)
{
    arr50[i]=random(1,200)
    if(1%2!=0)
    multNotPair*=arr50[i]
}
console.log(multNotPair)
let minValue=200
for(let i=0;i<50;i++)
{
   if(arr50[i]<minValue)
   minValue=arr50[i]
}
let counter=0
for(let i=0;i<50;i++)
{
   if(arr50[i]==minValue)
  console.log(i)
}
