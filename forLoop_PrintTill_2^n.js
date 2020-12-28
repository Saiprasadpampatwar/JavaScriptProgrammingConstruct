var number = process.argv;
console.log(parseInt(number[2])); // number[0] will take the node as argument and number[1] will take the file path
for(var i = 0; i <= parseInt(number[2]); i++ ) {
    console.log(Math.pow(2,i) + ' ');
}