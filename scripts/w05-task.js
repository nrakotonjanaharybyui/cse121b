/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (list) => {
    list.forEach(element => {
        let article = document.createElement('article');
        let title = document.createElement('h3');
        title.textContent = element.templeName;
        let img = document.createElement('img');
        img.src = element.imageUrl;
        img.alt = element.location;
        article.appendChild(title);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
let getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if(response.ok){
        templeList = await response.json();
    }
    displayTemples(templeList);
     
};

/* reset Function */
function reset(){
    // while(templesElement.firstChild){
    //     templesElement.removeChild(templesElement.firstChild);
    // }
    templesElement.innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples){
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter){
        case 'utah':
            temples = temples.filter((temple) => temple.location.includes('Utah'));
            displayTemples(temples);
            break;

        case 'notutah':
            temples = temples.filter((temple) => !temple.location.includes('Utah'));
            displayTemples(temples);
            break;

        case 'older':
            temples = temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(temples);
            break;

        case 'all':
            displayTemples(temples);
            break;
    }
}



/* Event Listener */

document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});

getTemples();
