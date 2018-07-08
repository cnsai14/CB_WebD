function add(input){
    console.log("hello world");
    //return this; //this here is MODULE.EXPORTS
    console.log(parseInt(input[0]) + parseInt(input[1]));
}

var a = 6;
var b = 7;

module.exports={
    x: a,
    y: b,
    z : add
}

