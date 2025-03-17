const urlApi = "https://lanciweb.github.io/demo/api/pictures/";
const parentElement = document.getElementById("card-container");
const overlayElement = document.getElementById("overlay-container");
const closeButtonElement = document.getElementById("close-button");
const overlayImgElement = document.getElementById("close-button");

let cardElements;


// Chiamata all'endpoint urlAPI alla risposta invoca la funzione renderHTML
axios.get(urlApi).then(response => renderHTML(parentElement, response.data)).catch(error => console.error(error));


closeButtonElement.addEventListener("click", function () {
    overlayElement.classList.add("d-none")
})

/*
Funzione che accetta due parametri:
- un elemento "padre" che è il contenitore in cui appendere i nuovi elementi.
- un array su cui itineremo per generare un nuovo elemento con createHTML per ogni elemento dell'array.
- Dopo aver renderizzato gli elementi aggiungiamo a loro un evento, non possiamo farlo direttamente sul selettore cardElements
  quindi itineriamo negli elementi del array cardElements aggiungendo ad ognuno di essi il addEventListener
*/
function renderHTML(parent, childArray) {
    parent.innerHTML = "";
    for (let i = 0; i < childArray.length; i++) {
        let element = childArray[i];
        let childElement = createHTML(element);
        parent.appendChild(childElement);
    }

    cardElements = document.querySelectorAll(".card")

    cardElements.forEach(card => {
        card.addEventListener("click", function () {
            console.log("Click sulla card");
            overlayElement.classList.remove("d-none");
        });
    });
}


/*
Funzione che accetta un parametro dalla quale utilizzeremo le proprietà del oggetto per creare un nuove elemento HTML
*/
function createHTML(member) {
    let element = document.createElement("div");
    element.classList.add("card");

    element.innerHTML = ` 
                <img src="${member.url}" alt="">
                <p>${member.title}.</p>
                <img class="pin" src="img/pin.svg" alt="">`;

    return element
}