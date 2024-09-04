// function req() {
//   var xhttp=new XMLHttpRequest(); 
//   xhttp.onreadystatechange=function(params) {
//     if(this.readyState==4 && this.status==200)
        // document.getElementById('data').innerHTML=this.responseText;
//   }
  
  


//   xhttp.open("GET","data.txt",true)
//   xhttp.send();
// }



// var str="This is a string";
// console.log(str.replace("string","word"))
// console.log(str.split(' '));


// array operations
// var arr=[2,22,22,222,333]
//  arr.forEach(function (item,ind,arr2){
//     arr2[ind]=item>50
// })
// array destructing
const[,,third]=[67,55,90]
// console.log(first)
// console.log(second)
console.log(third)
// Array spread operator
let a1=[2,4,6]
let b1=[1,3,5,90]
let c1=[...a1,...b1]
console.log(c1)
let [first,second,...rest]=[1,67,2,4,6]
console.log(rest)
// classes
class car{
    constructor(model,color,year){
        this.model=model;
        this.color=color;
        this.year=year;
    }
    

}
let obj1=new car("ford","black",1999);
let obj2=new car("fronx","black",2023);
// console.log(obj1)
console.log(obj2)
// var arr2=arr.filter(function(item){
//    return item>50;

// })

// console.log(arr)
// console.log(arr2)
// json
let person={
    name:"akhil",
    age:22
}
console.log(JSON.stringify(person))
console.log(JSON.parse(JSON.stringify(person)))

// ECMA6
// function display(fName,lName) {
//     alert(`my name is ${fName} ${lName}`)
// }
// arrrow functions
// var display=(fName,lName)=>{
//     alert(`my name is ${fName} ${lName}`)
// }
var add=(x,y)=>{
   
    alert(`sum is ${x+y}`)
}
