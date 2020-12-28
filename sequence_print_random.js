//1
let digit = Math.floor(Math.random()*10);
console.log("random number between 1 to 10 : "+ digit);

//2
let digit1 = Math.floor(Math.random()*6) +1;
console.log("number on dice : " + digit1);

//3
let digit2 = Math.floor(Math.random()*6) +1;
let digit3 = Math.floor(Math.random()*6) +1;
let digit4 = digit2 + digit3;
console.log("sum of numbers on dice : " + digit4);

//4
let sum = 0;
for(let i=0;i<5;i++){
    sum+=Math.floor(Math.random()*100);
}
let average = sum/5;
console.log("sum : "+sum+", Average : "+average)

//5
let lengthOfPlot = 60;
let breadthOgPlot = 40;
let areaOfPlotInInches = lengthOfPlot*breadthOgPlot*12;
let areaOf25plots = areaOfPlotInInches*25;
console.log("Area of 25 plots :"+areaOf25plots+" inches");

