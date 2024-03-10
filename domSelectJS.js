"use strict";

// ==========appendChild===========
// let creaname = document.createElement("h2");
// creaname.textContent = "This is My text";

// let demoSection = document.getElementById("demo");
// demoSection.appendChild(creaname);


// ==========insertBefore===========
// let creaname = document.createElement("h2");
// creaname.textContent = "This is My text";

// let demoSection = document.getElementById("demo");
// demoSection.appendChild(creaname);

// demoSection.insertBefore(creaname, demoSection.childNodes[0])


// ==========replaceChild===========

// let replaceEle = document.createElement("h5");
// let replaceEleId = document.createTextNode("My name is Amit");

// replaceEle.appendChild(replaceEleId);
// console.log(replaceEle)

// let parentid =document.getElementById("demo");

// let oldChild = parentid;
// console.log(oldChild)

// parentid.replaceChild(replaceEle, oldChild.childNodes[3])



// let elementN =document.createElement("li");
// let changesVal = document.createTextNode("2. Second");

// elementN.appendChild(changesVal);
// console.log(elementN);

// let listIteam = document.getElementById("list");

// let oldIteam = listIteam;
// console.log(oldIteam);

// oldIteam.replaceChild(elementN, oldIteam.childNodes[3])


// ==========height===========
//let iheight =window.innerHeight + "px";

// let divheight = document.getElementById("demo");
// divheight.style.height = "500" + "px";
// console.log(divheight)
// ======================


// ==========remove===========
// let removeid = document.querySelector("#demo h5");
// removeid.remove()
// console.log(removeid)


// ==========DOM CSS(Style, className, classList)===========
// let selectId = document.querySelector("#demo").style.color= "white";
// console.log(selectId)

// let selectId =document.querySelector("#demo").className = "xyz";
// console.log(selectId)

// let selectId =document.querySelector("#demo").classList.add("xyz", "newClass");
// console.log(selectId)


// ==========querySelectorAll,querySelector===========

// let querySelect = document.querySelectorAll("#demo h5")[1].innerHTML="Lorem ipsum dolor";
// console.log(querySelect)

// let querySelect = document.querySelector("#demo h5").innerHTML="Lorem ipsum dolor";//(select to first one)
// console.log(querySelect)

// ==========querySelectorAll,querySelector===========


let sho = document.getElementById("Show_text").style.display="none";
let button = document.querySelector("#click");

button.addEventListener("click", function(){
    let sho =document.getElementById("Show_text");
    if(sho.style.display === "none"){
      sho.style.display = "block";
      console.log(sho.style.display)
    }
});



















