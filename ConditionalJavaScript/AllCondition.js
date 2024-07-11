// let UserAge=19;
// let iSRagisterd=true;
// let isCitizine=false;

// if(UserAge>=18){
//     if(isCitizine){
//         if(iSRagisterd){
//             console.log("You Are Eligible for Voting :");
//         }else{
//             console.log("You Are not Eligible  For Voting due to Ragistration Problem:")
//         }
//     }else{
//         console.log("You are not Eligible for Vote Due To CitzenShip Problem:");
//     }
// }else{

//     console.log("You are Not Eligeble Voting Dou To Younger ");
// }


//// Using The Switch Statement in JavaScript:

// Find The Circle Area :

// let Shape="Circle";
// let  a=20;
// let b=30;



// switch(Shape){
//     case "Rectengle":
//   console.log("Area Of Rectengle is ", a*a);
//   break;

//   case "Circle":
//     let r=2;
//     console.log("Area of Circle Is ", a*b);
//     break;
//     default:
//         console.log("Sahpe IS Not MAtch");
// }

// let num=1;
// let table=3;

// while(num<=10){
//   console.log(table*num);
//   num++;

// }

// let  UserInput;
// let  UserNumber;

// do{

//   UserInput=prompt("Enter The Positive Number");
//   UserNumber=parseFloat(UserInput);


// }while(isNaN(UserNumber)||UserNumber<0);
// console.log(UserNumber);
let num1=10;
let isPrime=true;
for(let i=2;i<num1;i++){
if(num1%i==0){
  isPrime=false;
  break;
}
}

if(isPrime){
  console.log("Is a Prime Number :");

}else{
  console.log("Is not a prime Number :");
};



//// Find the leap year :

// let leep=2020;
// if((leep%4==0 &&leep%100!==0)|| leep%400==0){
//   console.log("This Year Is Leep year :");
// }else{
//   console.log("Is Not a leep Year :");
// }



//// Find the Pattern In JavaScript :

// for(let i=0;i<=4;i++){
//   var pattern=""
//   for(let j=0;j<=i;j++){
   
// pattern=pattern+"*";
//   }
//   console.log(pattern);
// }




