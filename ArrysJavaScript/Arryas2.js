/// Sqare of The Number Using map methode :
const Num=[1,2,3,4,5,6];
let ans=Num.map((curr)=>{
    return curr*curr

})
console.log(ans);
// Output:: [ 1, 4, 9, 16, 25, 36 ];


//// retun the Array new Captalize :
const Cap=["banana", "papaya ","mango ", "lemone "];
let ann=Cap.map(( Current)=>{
    return Current.toUpperCase();

});
console.log(ann);

////OutPut:::[ 'BANANA', 'PAPAYA ', 'MANGO ', 'LEMONE ' ];

/// Using The map methode Pick the Even value In Side The array:
// const Num2=[1,2,3,4,5,6,7];
// let ans3=Num2.map((Current)=>{

//     if(Current%2==0){
//         return Current*Current;
//     }

// }).filter(( curr)=>{
//     return curr!==undefined;

// })
// console.log(ans3);

///// Sort Way Do This Work:

const Num2=[1,2,3,4,5,6,7];
let ans3=Num2.map((current)=>current%2==0?current*current:undefined).filter((current)=>current!==undefined);
console.log(ans3);
/// Output:[ 4, 16, 36 ]:


///// Add The Mr. Array  me :

const name1=['satyam','Rahul','Kamal','Geeta'];

const profix=name1.map(( Current)=>{
   return`'Mr' ${Current}`;

});

console.log(profix);

//// Reduce methode in java :

const Price =[100,200,300,400,500,600];
let pa=Price.reduce(( accu, Current)=>{
    return accu+Current;
});
console.log(pa);

//https://github.com/satyamguptaaaaaaa/JAVA-BASIC-CONCEPT-WITH-PROJECT.git

/////https://github.com/satyamguptaaaaaaa/JAVA-BASIC-CONCEPT-WITH-PROJECT.git