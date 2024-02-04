/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Narindra",
    photo: "/images/ProfilePic.jpeg",
    favoriteFoods: ["Chicken curry", "Pork curry", "Pizza", "Fish Ro Mazava"],
    hobbies: ["books", "movies", "video games", "basket ball", "soccer"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place:"Antananarivo, Madagascar",length:"10 years"});
myProfile.placesLived.push({place:"Antsiranana, Madagascar", length:"5 years"});
myProfile.placesLived.push({place:"Antananarivo, Madagascar", length:"25 years"});
myProfile.placesLived.push({place:"Rexburg, Idaho, USA", length:"6 months"});

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let line = document.createElement('li');
    line.textContent = element;
    document.querySelector('#favorite-foods').appendChild(line);
});

/* Hobbies List */
myProfile.hobbies.forEach(element =>{
    let line = document.createElement('li');
    line.textContent = element;
    document.querySelector('#hobbies').appendChild(line);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(element =>{
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = element.place;
    dd.textContent = element.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

/* Name */

/* Photo with attributes */











