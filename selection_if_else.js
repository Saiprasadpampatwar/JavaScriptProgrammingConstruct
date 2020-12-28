//1 Minimum Value;
let min = Math.floor(Math.random()*900+99);
let max = Math.floor(Math.random()*900+99);
for(let i=0;i<4;i++){
    let num = Math.floor(Math.random()*900+99);
    if(num<min){
        min = num;
    }
    if(num>max){
        max = num;
    }
}
console.log("min number : "+min)
console.log("max number : "+max)
