 
//


//DOM= DOCUMENT OBJECT STYLE
//Start and create element in html
const h1 = document.getElementById('h1');
const p1 = document.getElementById("p1");
const h2 = document.getElementById(`h2`);
//add element representing all 3 lists headings
const divUl = document.getElementById(`divUl`)
//add idd for individual list headings//just in case//
const names = document.getElementById(`name`)
const occupation = document.getElementById(`occupation`)
const price = document.getElementById(`price`)
//list all Ul names
const list1 = document.getElementById(`list1`)
const list2 = document.getElementById(`list2`)
const list3 = document.getElementById(`list3`)
// create arrays



//done
//input text to  heading elements 
h1.innerText = "Freelancer Forum";
p1.innerText = "The average price is $30";
h2.innerText = `Available Freelancers`;
names.innerText =`Names`
occupation.innerText=`Jobs`
price.innerText= `Price`
// create text arrays
const arrayNames = [`Alice`, `Bob`, `Carol`];
const arrayOccupation = [`Writer`, `Programmer`, `Teacher`];
const arrayPrice=[`$30`, `$50`, `$70`];
//input arrays to Ul

//Ul list 1
let ul1 = document.createElement("ul1"); 

for(let i=0; i< arrayNames.length; i++){ 
  let li = document.createElement("li"); 
  li.textContent = arrayNames[i]; 
  ul1.appendChild(li); 
}

document.getElementById("list1").appendChild(ul1); 

//ul list 2
let ul2 = document.createElement("ul2"); 

for(let i=0; i< arrayOccupation.length; i++){ 
  let li = document.createElement("li"); 
  li.textContent = arrayOccupation[i]; 
  ul2.appendChild(li); 
}

document.getElementById("list2").appendChild(ul2);



//LIST 3
let ul3 = document.createElement("ul3"); 

for(let i=0; i< arrayOccupation.length; i++){ 
  let li = document.createElement("li"); 
  li.textContent = arrayPrice[i]; 
  ul3.appendChild(li); 
}

document.getElementById("list3").appendChild(ul3);


//use CSS properties to style page 
const flexboxContainer = document.getElementById(`flexboxContainer`)
















//#//

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  //#//

