var number = process.argv;
var harmonicResult = 0;
for(let i = 1; i <= parseInt(number[2]); i++) {
    harmonicResult += (1/i);
}

console.log(harmonicResult);