// function grret() {
//     console.log("Heelo My New javaScript Funcation:");
    
// }
// grret();

// function names(a,b){
//     return a+b;
// }


// console.log(names(2,3))

/// Anonemouse Funcation In JavaScript :
// var result= function(a,b){
//     console.log(a+b);
// }

// ///  Reult Is A Anounmouse Funcation ;
// console.log(result(2,4));
/////
//// Fist time calling Funcation:


// let result=(function(a,b) {
//     console.log(a+b);
//     return a+b;
    
// } )(2,3);

// console.log('Number is '+result)

//// easy to understand :


//// Funcation new Methode :

/// Using new methode javascript

//// Fat arrow Funcation in Java

// const sum=( a,b)=>{
//     return a+b;

// }

// console.log(sum(2,3));

/// Sqare of The Number :

// const sum=(a)=>a*a;
// console.log(sum(3)) 

//// Calulater Making Using funcation:

// const Cal=( num1, num2,operatore)=>{
 
//     switch(operatore){
//         case "+":
//             return num1+num2;
//             break;

//      case "-":
//         return num1-num2;
//         break;

//         case "*":
//             return num1* num2;
//             break;
//             case "/":
//                 return num1/num2;
//                 break;
//                 default:
//                     console.log("operatore is not match :");
//                     break;
//     }
// }
// console.log(Cal(3,2,"/"));
//// Reverce using the String :

// const reverce =( str )=>{
//     let rev=" ";
//     for(let  i=str.length-1; i>=0;i--){
//          rev=rev+str[i];

//     }
//     return rev;
// }
// console.log(reverce("Satyam Gupta "));


//// Check the Number Is Palidroma :
// let IsPalidroma =true;
// const Palidroama=( str )=>{
// let rev="";

//     for( let i=str.length-1;i>=0;i--){
//         rev=rev+str[i];
        
//     }

//     str=== rev ?IsPalidroma=true:IsPalidroma=false;
//     return IsPalidroma;
// }
// let str="rartt";
// console.log(Palidroama(str));

// if(IsPalidroma){
//     console.log("Is The Palidroma :")
// }else{
//     console.log("Is not a Plidroma :")
// }
