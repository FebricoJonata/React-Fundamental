const constIndentifier = 17
console.log(constIndentifier)


//Var has problem hoisting --> where the interpreter can read indentifier value even though we 
//declare in bellow. This is problem must be avoid in programming because can caused ambiogous
varIndentifier = "This var"
function functionScope(){
    //can't be changed because var is function scope -> var can't access/change value through function
    varIndentifier = 0
}
console.log(varIndentifier)
var varIndentifier;

//Let is block scoping --> let can't change value trough block => "{}"
let letIndentifier = 0;

()=>{
    letIndentifier = "This let"
};

console.log(letIndentifier)