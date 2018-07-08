/*function original(){
    console.log(this);
}
original();

/!*IMPLICIT BINDING*!/
var fruit= {
    name :'apple',
    getName : function(){
        return this.name;
    }
}

console.log(fruit.name);
console.log(fruit.getName());

function getName(){
     console.log(fruit);
}

getName();
this.getName();*/

/*EXPLICIT BINDING*/
/*
function read(){
    console.log(this.file2);
}

var file = {
    name : 'index',
    content : "ABC DEF"
};

var file2 = {
    name : 'BODOX',
    content : "BLAH BLAH",
    file : "I AM FILE2"
};


read();
read.call(file2);
*/

/*EXPLICIT CALL TRIALS*/
/*
function print(x,y,z){
    console.log(this.name);
}

function print2(x,y,z){
    console.log(this.details);
    console.log(x,y,z);
}

var file = {
    name : 'CHANDU',
    details : 'LAMBA HAI YE BANDA'
};

print.call(file);

var binnd = print.bind(file);
binnd();

var arr = [1,2,3,4,5,6,7];
print2.apply(file,arr);
*/


/*NEW BINDING*/

function Hero(name,str){
    this.name = name;
    this.strength = str;

}

var superman = new  Hero('Superman', ' 150+');
console.log(superman);