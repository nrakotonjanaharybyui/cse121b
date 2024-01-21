/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Narindra Rakotonjanahary";
let currentYear = 2024;
let profilePicture = "images/ProfilePic.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let foodlist = ["Pork Curry", "Tuna and rice", "Vegetable Salad"];
let favFoods = foodlist.join(', ');
foodElement.innerHTML = favFoods;

let food1 = "Mango curry";
foodlist.push(food1);
favFoods = foodlist.join(', ');
foodElement.innerHTML += `<br>${favFoods}`;

foodlist.shift();
favFoods = foodlist.join(', ');
foodElement.innerHTML += `<br>${favFoods}`;

foodlist.pop();
favFoods = foodlist.join(', ');
foodElement.innerHTML += `<br>${favFoods}`;

// for(let i=0; i<foodlist.length; i++){
//     currentFood = document.createElement("p");
//     currentFood.innerHTML = foodlist[i];
//     foodElement.appendChild(currentFood);
// }







