var x=5;
function a(){
   console.log("Globally value of x is :"+ x);
   b();
}
function b(){
    x=8;
console.log(" locally value of x: "+x);
}
console.log(x);
a();
