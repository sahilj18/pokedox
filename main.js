import data from "./data";

const dataRow =document.querySelector"([data-row])";
console.log(dataRow);


for (let pokemon of data){


const p =document.createElement("p");
p.textcontent =pokemon.name;
dataRow.appendChild (p);

}

