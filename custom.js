// var (naver use it old style) gobal scope 
// let (when you need Re assign the valuse) block scope
// const (when you naver want re assign)
"use strict";



// let MyName = "hello";

// My_cop = "Hi";

//alert(My_cop);


// =======Number data/Infinity======
let Num = 250;
let stri ="hello"

let num_1 =250;
let num_2 =200;

//alert(num_1 * num_2)

let width =30.25 // Number data type

//alert(25/0); //Infinity

//alert("Hello" / 2); // NaN



// =======Backtick/Concat start======

let myNumber = 45;

let myName = `hello ${myNumber}`; //Backtick ``

//alert(myName);


let mumb = 40;
let Mynu = "Amit";

// let mass = "Hello "+Mynu+", Your age is "+mumb+""; //Concat

// let mass_2 = `Hello ${Mynu}, your age is ${mumb}` //Backtick 


//alert(mass_2);

// =======Null/Undefined======

let name = null;

// alert(name);

let name2;

//alert(name2); // undefined



// ===============typeof=============
let valu = "Hello";
let valu2 = 30;
let valu3 = 444444n;
let valu4 =null;

// alert(typeof(valu)); 

// alert(typeof(valu2));

//alert(typeof(valu3)); //bigint

//alert(typeof(null)); //object



// =============prompt And confirm=============

// let  nuName = prompt("Enter Your First Name"); //prompt

// alert(nuName);

// let name22 = prompt("Enter Your First Name");

// let name33 = prompt("Enter Your Last Name");

// let name_re = `hello ${name22} ${name33}`

// alert(name_re);


// let box = confirm("what is?"); //confirm

// alert(box);


// ==============convert --String/Number/Boolean============

 let stra = 100;
 stra = String(stra);
 //alert(stra); //Number
 //alert (typeof stra); //String


let pra = "ksjsjhshs";
pra = Number(pra);
// alert(pra); //NaN
// alert (typeof pra); //Number


//Null / Undefined / NaN / "" / 0 ---False

//"Amit" / 1 / 100 / "  " ----True

let bool = null;
bool = Boolean(bool);
//alert (bool); //False
//alert (typeof bool); //Boolean


// ==================Assignment Operators============

let num_3 = 30;
let num_4 = 40;
let num_5 = 50;

//num_to = 10 + 10 + 10;
//num_to = (10 - 10) + 10;
//num_to = 10 * (10 + 10);
//alert(num_to)

let amout = 20;

//amout += 10 //30
//amout -= 10 //10
//amout *= 10 //200
//amout /= 10 //2

//alert(amout);

// ================= Increment And Decrement ===============

let amo = 1;

let result = 2 + ++amo;

//alert(result); //4

//alert(amo++) // 1 (postfix)
//alert(++amo) // 2 (prefix)

//alert(amo--) // 1 (postfix)
//alert(--amo) // 0 (prefix)


// =================  Modify and Assign ===============

let num_7 = 20;
let num_8 = 30;

//alert( 30 > 20 ); //True (>)



//alert( 10 < 20 ); //True (<)

//alert( 20 >= 20 ); //True (>)
//alert( num_7 >= 30 ); //false (>)

//alert( 10 <= 20 ); //True (<)
//alert( num_8 <= 20 ); //false (<)

//alert( "10" == 10 ); //True (==)
//alert( num_7 == 10 ); //false (==)

//alert( 10 !== 10 ); //false (!==)
//alert( num_7 !== 10 ); //True (!==)


// ==================   == / ===    ==============

let new_num = "30";

//alert( new_num == 30 ); //True

//alert( new_num === 30 ); //false



// ==================   if/ else    ==============

let var_nu = 30;

//( var_nu <= 20 ) ==condition

// if ( var_nu != 20 ) {  

//  alert("It is valid");

// } else { 

//   alert("It is invalid");

// }



// ==================   if/ else (Ternary operator)    ==============

let var_nu1 = 30;

// var_nu = (var_nu1 >= 20) ? "It is valid" : "It is invalid"; //Ternary operator
// alert(var_nu);

// var_a =(20>10)?"It is vaild": "not vaild";
// alert(var_a);
// ==================   || / && / !  ==============

// let var_or = "20";
// let var_or2 = "30";

// if ( var_or == 20 ||  40 === 30) {

// 	alert("It is valid");

// } else {
// 	alert("It is Invalid");
// }


//  let var_or = "20";
// let var_or2 = 30;

// if ( var_or == 20 && var_or2 === 30) {

// 	alert("It is valid");

// } else {
// 	alert("It is Invalid");
// }


// let var_or = "20";
// let var_or2 = 30;

// if ( !(var_or == 20 && var_or2 === 30) ) {

// 	alert("It is valid");

// } else {
// 	alert("It is Invalid");
// }



// ==================   while  ==============

// let count = 0;

// while (count < 6){
//   console.log("Hello");
//   count++;
// }


// ==================   Do..while  ==============

let count = 0;

// do{
// 	console.log("Hello" + count);
// 	count++;
// } while(count < 5){ }


// ==================   For  ==============

for ( count = 1; count < 10; count++){
    if(count==9){
      break
    }
	console.log("Hello" + count);
   
}



// ==================   break /  ==============

// let count = 0;

// while (count< 10){
//     if(count == 7){
//        break;
//     }
//    console.log("Hello" + count);
//    count++
// }

// for (count1 = 0; count1<= 10; count1++){
//     if(count1 == 5){
//        continue;
//     }
//    console.log("Hello" + count1);
   
// }

// ==================local storage and session storage====================

// localStorage.setItem('Name', 'Amit');
// localStorage.setItem('Name2', 'Samir');

//let name = localStorage.getItem('Name');
//console.log(Name)


// sessionStorage.setItem('Name', 'kamal');
// sessionStorage.setItem('Name2', 'kamal');


// =================== function ===============

// function display(){
// 	console.log("Hello World 1");
// 	console.log("Hello World 2");
// 	console.log("Hello World 3");
// }
// display();

// var display = function(){
// 	console.log("Amit Maity")
// }
// display();

// function display(){
// 	var a =5;
// 	var b =4;
// 	var c =a+b;
// 	console.log(c);
// }
// display();

// function display(a,b){
//    var c=a+b;
//    console.log(c)
// }
// display(20,10);


// ================ Multiple Functions ===========


// function add(a,b){
//    var c = a + b;
//    return c;
// }
// function sub(d){
// 	var result =add(2,3) - d;
// 	console.log(result);
// }
// sub(2);

// function add(){
// 	var a =4;
// 	var b = 5;
// 	var c =a+b;
// 	return c;
// }
// function sub(){
// 	var d =4;
// 	var sult=add(c) - d;
// 	return sult;
// }
// console.log(sub);


// ================ Multiple array ===========



// var arr=[10,12,20,30];
// console.log(arr[2]);

// var arr=[
// [10,12,20],["bus","train","taxi"],[true,false]
// ]
// console.log(arr[1][2]);


// var arr=[
// {
// 	name:"samir",
// 	age:28,
// },
// {
// 	name:"kabir",
// 	age:30,
// },
// ]
// console.log(arr[0].name);


// ================ Multiple object ===========

// var obj={
// 	name:"Samir",
// 	age: 20,
// 	roll:10,
// }
// obj.changesage=30;
// obj.roll=5;
// console.log(obj);


// var obj={
// 	name:"Samir",
//  	age: 20,
// 	roll:10,
// 	sibling:["kabir","bittu"]
// }
// console.log(obj.sibling);



// const car={
// 	color:"red",
// 	model:7,
// 	automatic:true,
// }
// function prient({color,model,automatic}){
// 	console.log(color,model,automatic);
// }
// prient(car);

// ================ All Elements ===========

// function myfuction(){
// 	document.getElementsByTagName("p");
// }
// function myfuction(){
// 	document.getElementsByClassName("top-text");
// }
// function myfuction(){
// 	document.getElementsById("demo");
// }
// function myfuction(){
// 	document.querySelector("top-text");
// }
// function myfuction(){
// 	document.querySelectorAll("top-text");
// }
//console.log(myfuction);

// ================ Get and Set Attribute ===========


// var x =document.querySelector("div");
// x.setAttribute("class","top-text2");

// ================ changing javascript ===========

//document.querySelector("div").className="top-text2";
//document.querySelector("div").classList.add("top-text2");
//document.querySelector("div").classList.remove("top-text2");

// ================ Event ===========

// var x =document.querySelector("h1");
// var y =document.querySelector("button");

// y.addEventListener("click", function(){
//   x.innerHTML="Hello Html"
// });


//  var x =document.querySelector("h5");
//  var xx =document.querySelector("input");
//  var y =document.querySelector("a");

//  y.addEventListener("click", function() {
//  x.innerHTML=xx.value;
//  x.style.fontSize="30px";
// });


// window.addEventListener("scroll", function(){
//    if(window.pageYOffset > 200) {
//       document.querySelector("div").classList.add("posistion");
//    }else{
//    	document.querySelector("div").classList.remove("posistion");
//    }
// });



let y = document.querySelector(".copied");
let x = document.querySelector(".copiedtext");
// y.addEventListener("hover", function(){
// x.style.display = 'block';
// });
// y.addEventListener("mouseleave", function(){
// x.style.display = 'none';
// });



//let y =document.querySelector(".");
// window.addEventListener("load", function(){
//   console.log("sjjsh")
// });




// ========array==========

// let scro=["ram","amit","sumit"]
// let scro1=["ram1","amit2","sumit3"]

// console.log(scro.concat(scro1));

// let updated = scro.concat(scro1);
// document.write(updated)

// =====pop(remove this method)=====
// console.log(updated.pop());
// console.log(updated)

//console.log(updated.length);

// =====push(add this method)=====
// console.log(updated.push("new"));
// console.log(updated)


// ========function==============

// let fun = function(name){
// 	console.log(`Order today and GET $${name} OFF`);
// }
// fun(50);


// ========[this]==============

// let sum ={
//     name: 'Amit Maity',
//     place: 'Kolkata',
//     sum2: function(){
//          console.log(`I am ${this.name}. I am native to ${this.place}`)
//         console.log(this.place);
//     }
// };
// sum.sum2();


// ========[return]==============

// var add = function(a,b){
//    var dd= a+b;
//    return dd;
// }
// var dd =add(5,6);
// console.log(dd);


// ========[setTimeout]==============
// function greet() {
//     console.log('Hello world 3000');
// }
// function greet1() {
//     console.log('Hello world 2000');
// }

// setTimeout(greet, 3000);
// setTimeout(greet1, 2000);

// console.log('This message is shown first');

// ================function================

// var fun=function(a,b){
	
// 	return a+b;
// }
// if("a"=="a"){
// 	let c=5;
// 	console.log(c);
// }
// var fun2=fun(5,6);
// console.log(fun2);
// ================function[call,apply,bind]================
// let fun={
// 	name:"Christians",
// 	fun2:function(){
// 		console.log(this.name);
// 	}
// }
// fun.fun2();
// let fun3={
// 	 name:"Fellowship",
	
// }

// fun.fun2.call(fun3);


// let fun={
// 	name:"Christians",
// 	roll:"20",
// }

// let fun2=function(country){
// 	console.log(this.name+" "+"India")
// }
// fun2.call(fun, "India");

// fun2.apply(fun, ["India"]);

// let newN=fun2.bind(fun);
//  newN();

// ================map, filter, reduce[array]================

// let newA =[12, 23, 30];
// let newB=newA.map((valu, index, array)=>{
// 	console.log(valu, index, array);
//   return valu;
// });
// console.log(newB);


// let newA =[2, 4, 7, 14, 20, 26];
// let newB = newA.filter((valu)=>{
//    return valu>10;

// });
// console.log(newB);

// let newA = [2, 4, 6, 8, 10];
// let newB = newA.reduce((ha, hb)=>{
//     return ha + hb;
// });
// console.log(newB);


// for(con=1; con<10; con++){
//   if(con==9){
//     break
//   }
//   console.log("Hello" + con);
// }

// for ( count = 1; count < 10; count++){
//     if(count==9){
//       break
//     }
// 	console.log("Hello" + count);
   
// }



// console.log("hello1");
// setTimeout(()=>{
// console.log("hello2")
// },7000)
// console.log("hello3");

// const promise = new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("hello4")
// })
// })
// promise.then((value)=>{
// console.log(value)
// })

// let newName=10;
// let newName1=()=>{
// 	if(newName==="10"){
//        console.log("My code is correct");
// 	}else{
// 		console.log("My code is wrong");
// 	}
// }
// newName1();


// =========var let conts========
// function FirstName(e) {
// 	if (e) {
// 		let First ="My code is correct";
// 		const Second ="My code is wrong";
// 		console.log(First);
// 	}
	
// }
// FirstName(true);

// let Fname ="correct";
// Fname ="wrong";
// console.log(Fname);

// let Fname = [10, 2, 4, 5, 20];

// let [firstElement, , , , lastElement] = Fname;
// console.log(`${firstElement} ${lastElement}`);


// =========value sweep========

// let a= 10;
// let b= 20;

// es5
// let team =a;
// a=b;
// b=team

// es6
// [a,b]=[b,a]

// let team = {
// 	name1 : "Amit",
// 	Age: 30,
// 	Roll: 22,
// 	fun:{
// 		first:"Playing",
// 		game:"Video",
// 	}
// }
// let {fun}=team

// console.log(`${fun.game}`);

// let a =10;
// let b=20;
// let team=(a,b)=> {
// 	return a+b;
// }
// console.log(team(30,20))


// =========Default Parameters========

// let Firname=(a,b=2, c=3)=>{
//     return a*b*c;
// }
// console.log(Firname(4))


// let Firname1=(...input)=>{
//   //console.log(...input);
//   let total =0;
//   for (let i of input){
//   	total += i
//   }
//   console.log(total);
// }
// Firname1(2,3,4,5,6,7,8,9,10);


// let Firname=(a,b,...c)=>{
//   console.log(a+b);
//   console.log(...c);
//   console.log(c[0]);
//   console.log(c.length);
// }

// Firname(2,3,4,5,6,7,8,9,10);


// =========Spread Operator========

let par1=[1,2,3];
//let par2=[4,5,6];
let par3=[7,8,9];


// let parN =[...par1,...par2]
// console.log(parN)


// let par2 =par1;
// par2.push(4,5);
// console.log(par2)


// let par2 = par1;
// let NewO = [...par1, 4,5,...par3]
// console.log(NewO)


// =========map,filter========
// let Obje = [
//     { Number: 1, Name: 'First' },
//     { Number: 2, Name: 'Second' },
//     { Number: 3, Name: 'Third' },
//     { Number: 4, Name: 'Four' },
//     { Number: 5, Name: 'Five' },
// ];
  

// const nameNN = Obje.map(user=>user.Name);
// console.log(nameNN);


// const nameNN = Obje.filter(user=>user.Number > 2);
// const nameNNN =nameNN.map(user=>user.Name)
// console.log(nameNNN);


// const promise = new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("hello4")
// }, 2000)

// })
// promise.then((value)=>{
// console.log(value)
// })


// console.log("hello5")




// https://blog.logrocket.com/localstorage-javascript-complete-guide/

function getval(){
  let val = document.querySelector('#first_name').value
  console.log(val)
localStorage.setItem('getval', val);
}

const cat = localStorage.getItem('getval');
//console.log(cat)

































































    





