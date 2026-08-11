let i=0;
let hello = setInterval(function() {
    console.log(i++);
    if(i==4){
        clearInterval(hello);
    }
    },1000);
