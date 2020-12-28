let number1 = process.argv[2];
 console.log(number1);
 let number2 = number1;
 

function checkPalindrome(number1){
    let reverseNumber=0;
    while(number1>0){
        let rem = number1%10;
        reverseNumber = reverseNumber*10 +rem;
        number1=Math.floor(number1/10);
    }
    if(reverseNumber == number2)
        return true;
    else 
        return false;
}

if(checkPalindrome(number1)){
    console.log("Yes It's Palindrome");
}else{
    console.log("It's not palindrome");
}
