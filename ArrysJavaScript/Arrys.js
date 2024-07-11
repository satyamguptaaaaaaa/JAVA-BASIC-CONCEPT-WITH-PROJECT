// let fruits=["Apple", "Banana","Orange"];

// console.log(  fruits)


/// Array Funcation Methode :


let fruits=["Apple", "Banana","Orange"];


//// For Of loop Using :
// for(let item of fruits){
//     console.log(item);

// }

//// For Loop Using Inside:
// for(let i=0;i<=fruits.length-1;i++){
//     console.log(fruits[i]);
// }


// for(let item in fruits){
//     console.log(item);
// }


//// For Each Methode in JavaScript :
//// For Each Methode is Not Retun Any value :

// fruits.forEach((curre, index , arry)=>{

//     console.log(`${curre} & ${index}`);

// });

////// This is a return The Value when use it.
let value=fruits.map(( current, index , Arry )=>{
    return (`${current} ${index}`);

})
// console.log(value);

// console.log(fruits);

////// MULtiply table Current Value :
//  const arry=[1,2,3,3,];
// let va=arry.map(( curre)=>{
//  return curre*2;
// });
// console.log(va);

//// Push the value last index :

// console.log(fruits.push("banana"));
// console.log(fruits);

// ///// pop the Value last Index :

// console.log(fruits.pop());
// console.log(fruits);

// //// Shift the value Fist Index:

// console.log(fruits.shift("banana"));
// console.log(fruits);

// ///// Unshift Method Fist Index :
// console.log(fruits.unshift());
// console.log(fruits);

////


//// slice methode 

// console.log(fruits.splice(fruits.length,0,"Graps"));
// console.log(fruits);


// const Arry2=[1,2,3,4,5,6,7];
// //// Define The array Included a Array :
// console.log(Arry2.indexOf(2));
// //// Define The array Included a Number:
// console.log(Arry2.includes(3));


const Month=['jan','Fev','Mar','April','May','jun','july'];
let UpadateNum=Month.indexOf('Mar');

//// 1. Find The Mar In Array and update the Array :

console.log(Month.splice(UpadateNum,1,"March"));
// console.log(Month);

//// 2. Delete The june Frome the Array :
let Del=Month.indexOf('jun');
console.log(Month.splice(Del,1));
console.log(Month);

//// 3. Add The December And of The Array :
console.log(Month.splice(Month.length,0,"Dec"));
console.log(Month);


//// filter methode in Array :

let Methode=[1,2,3,4,5,6,7];
let me=Methode.map((curre, index , arry)=>{

    return curre*2;

});

//  let val=me.filter(( curre, index , arry)=>{
//     return curre>10;
// });
// ///// Using The Find Methode In java Script :
// console.log(val);

let find=me.find(( curre, index , arry )=>{
    return curre>10;

});
// console.log(find);

/// Using the Find Index number :
// let findin=me.findIndex(( current , index , array )=>{

//     return current>10

// })
// console.log(findin);

//// Delete the value in Array Using The Filter methode :
// let vale=6;

// let value2 =[1,2,3,4,5,6,6];
// let val=value2.filter(( Current)=>{
//     return Current !==vale;

// })
// console.log(val); 

///

// const Product =[
//     {name:"laptop",Price:1200},
//     {name:"Phone ", Price:800},
//     {name:"Tablet  ", Price:300},
//     {name:"SmartWatch", Price:200}
// ];

// let cuv=Product.filter(( curre)=>{
//  return curre.Price<=500;
// });
// console.log(cuv);


//// Use The unique Number in Array :
    let Arrays=[1,2,3,4,5,6,6,7];
    // let UniqueValue=Arrays.filter(( Current, index , array)=>{ 
    //     return array[index]!==index;
    // });
    // console.log(UniqueValue);

    // let UniqueValue =Arrays.filter((curr, index, array )=>{
    //     return array.indexOf(curr)==index;
        
    // });

    // console.log(UniqueValue);

    console.log([...new Set(Arrays)]);



    ///// Using the Sorting Methode  Compare Methode :

    // const Number =[1,2,3,5,6,7,7,8,9,11];
    // /// compare Methode In java :
    // Number.sort((a,b)=>{
    //     if(a>b) return 1;
    //     if(b>a) return -1;
    // });
    // console.log(Number);
 
    // console.log(Number.sort());


    ///// Using the Map Methode Sqare of The Number:









