//object
var person = {
    firstName: "Aravind",
    lastName: "R",
    age: 32,
    isMale: true,
    address :{
        city: "tiruchengode",
        district: "namakkal"
    }
}
console.log(person);
console.log()
console.log(person.firstName);
console.log()
console.log(person.address);
console.log()
console.log(person.address.city);
console.log()
console.log(Object.values(person));
console.log();
console.log(Object.keys(person));
console.log();
console.log(JSON.stringify(person))
console.log();
//Arrays
var names = [
    "Aravind",
    "Aswin",
    "Sabari",
    "Harish"
]
console.log(names);
console.log("names of index 0 -"+names[0]);
console.log("size of names is "+names.length);
console.log();
//functions
function addingtwonumbers(num1,num2){
    return num1+num2;
}
var res = addingtwonumbers(3,5);
console.log(res);

//loops
console.log("for i method")
for(var i = 0; i<names.length;i++){
    console.log(names[i]);
}
console.log();
console.log("for of");
for(const name of names){
    console.log(name);
}
console.log();
console.log("for each method");
names.forEach(function(name){
    console.log(name);
});
console.log();

// console.log("for in method");
// for(const name in names){
// console.log(name);
// }
console.log("Using while loop");
//while loops
var index = 0;
while(index<names.length){
    console.log(names[index]);
    index++;
}
console.log();
console.log("Switch statement");
// switch
var gender = "M";
switch(gender){
    case "M":
        console.log("Male");
        break;
    case "F":
        console.log("female");
        break;
    default:
        console.log("unknown");

    }
//functions
console.log();

const brand = function (getBrand){
    return {
        brand: getBrand,
        website: `www.${getBrand}.com`
    }
}
console.log(JSON.stringify(brand("nike"),null,1)); 

console.log();
//arrow functions

const arrow = brand=>brand;

console.log(arrow("Puma"));

console.log();
const arrow2 = () => 3+3;
console.log(arrow2())
console.log();
const calculate = (a,b,sign)=>{
    switch(sign){
        case "+": 
            return a+b;
         case "-": 
            return a-b;
        case "*": 
            return a*b;
        default:
            return "error";

    }
}
console.log(calculate(3,5,"-"));
console.log();
//function default parameters
const parameter = (brand= "world")=>brand;
console.log("hello "+parameter());
console.log();
//callback function
const greetUser = (username,callback)=>{
    if(callback){
  console.log(callback(username)) ;
    }
    else{
        console.log(username);
    }
}
greetUser("vishal",username =>{
    return "hello "+username;
})  

console.log();
//object 
const perosn2 = {
    firstName:"Aravind R",
    Age:23,
   
    tostring:function(){
        return `My name is ${this.firstName} and my age is ${this.Age} and i am from ${this.address.city}`;
    }
}
// console.log(perosn2.tostring());
// console.log();
// //pulling properties from object.Object destructing
// const {firstName,firstName:name,Age,
//     address:{city:town}
// }=perosn2;
// console.log(name);
// console.log(Age);
// console.log(town);

console.log();
//using spread operator to merge two objects into 3rd object.
const address = {
        city:"tiruchengode",
        district:"chennai"
}
const person3={
    ...perosn2,
    address:{...address}
};
console.log(person3);
console.log();
//Arrays
const arr = [1,2,3,4,5,6];
arr.push(89);
arr.forEach(number=>console.log(number));
//deleting a element in array use splice.
arr.splice(4,2);
console.log();
arr.forEach(number=>console.log(number));
console.log();
//Array map
const num = [1,2,3,4,5];
const numbyTwoTimes = num.map(number => number*2);
console.log(numbyTwoTimes);
console.log();
//Array destructing
const arr1 = [
    "Aravind",
    "Aswin",
    "Sabari"
];
const [a,...rest]= arr1;
console.log(a);
console.log(rest);