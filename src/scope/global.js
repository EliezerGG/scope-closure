// variables

var a; //desclarando 
var b = 'b' // declaramos y asignamos 
b = 'bb' // reasignacion 
var a = 'aa' // redeclaracion

// Global Scope
var fruit = 'Apple'; //global
console.log(fruit);

function bestFruit(params) {
    console.log(fruit);
}

bestFruit();

function countries (){
    contry = 'Colombia'; //global
    console.log(contry);
}
countries();
console.log(contry);