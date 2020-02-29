//variables or data types
var a = "zohra";
var b = 1234;
var c = true;
var d = null;
var e =      

console.log(a);

//functions
//add
function add(a,b){
    var c = a+b;  
    console.log(c);  
}
add(1,5);

//sub (return)
var f
function sub(c,d){
    var e = c-d;
console.log(e);
return e;
}
console.log(sub(5,3));
//console.log(f);

//loops
//do while
var result=""
var i=1;
do{
    i=i+1;
    result = result+i;
    console.log("the value is",i);

}while(i<5);
console.log(result);

//while
var i=1;
while(i<=5){
     console.log(i);
     i=i+1;
    }

//for
var n=5;
for(i=0;i<=n;i++){
    console.log(i);
}

//conditional statements
//if
var n=6
console.log(n);{
if(n>0)
console.log("number is positive");
if(n<0)
console.log("number is negative");
}

//if else
var n=4
console.log(n);{
    if(n>0)
    console.log("number is positive");
    else
    console.log("number is negative");
}

//switch
var user =18;
switch(user){
    case 18:console.log("you are 18");
    break;
    case 19:console.log("you are 19");
    break;
    default:console.log("you are not 18 or 19");
}
