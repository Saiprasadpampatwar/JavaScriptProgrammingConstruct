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

//2
let day = process.argv[2];
let month = process.argv[3];

if((day >= 20 && day <= 31 && month == 'March') || (day >= 1 && day <= 20 && month == 'June') ||
                         (day >= 1 && day <= 30 && month == 'April') || (day >= 1 && day <= 30 && month == 'May')) {
        console.log(true);
}
else {
    console.log(false);
}
