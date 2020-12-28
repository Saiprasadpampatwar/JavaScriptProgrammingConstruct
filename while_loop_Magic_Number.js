let magicNumber = Math.floor(Math.random() * 100 );
let userNumber = 50;
let start = 0;
let end = 100;
let ctr = 0
while(userNumber != magicNumber){
    ctr++;
    if(magicNumber>userNumber){
        
        userNumber = (start+end)/2;
        start = userNumber;
        
    }
    else{
        userNumber = (start+end)/2;
        end = userNumber;
    }
}

console.log("magic number was : "+magicNumber+",  we got this magic number after :"+ctr+" iterations");
