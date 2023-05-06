//Given an array of strings, use a function to reverse all the
// elements in the string in ascending order and the specific 
//elements in descending order
function reverse(arrString){
    const arrString1=["MIRIAM"]
    const ascending=arrString.split().reverse()
   
}
console.log(reverse())

//Given an array of objects, each object representing a person 
//with a name and age property, write a function that returns the 
//sum of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function add(ages){
    let sum=0;
    for(let i=0;i<ages.length;i++){
        if (ages[i].age<18){
            sum +=ages[i].age;
        }
    }
}
console.log(add(ages))

   


//Using JS functions and an array of numbers, return positive if an
// element within the array is positive, negative if an element is 
//negative, else zero
function array(num){
    let num=0
    for(let i=0;i<array.length;i++){
        if(array[i]>0){
            positive="negative"
            break
        }else if(array[i]<0){
            positive="nagative"
            break
        }
        return positive
    }
}
let stringArray=[1,3,4,5,6]
console.log(array(num))
 
//Given an array of objects, where each object represents an employee 
//with an id, name, and salary property, write a function that returns
// a new array of employee objects sorted by their salary in ascending 
//order.
const employee=[
    {}
]