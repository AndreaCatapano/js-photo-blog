/* 
            <div class="card">
                <img src="https://marcolanci.it/boolean/assets/pictures/1.png" alt="">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img class="pin" src="img/pin.svg" alt="">
            </div>
*/

const urlApi = "https://lanciweb.github.io/demo/api/pictures/";
const parentElement = document.getElementById("card-container")

axios.get(urlApi).then(response => {
    renderHTML(parentElement, response.data);
}).catch(error => console.error(error));


function renderHTML(parent, childArray) {
    parent.innerHTML = "";
    for (let i = 0; i < childArray.length; i++) {
        let element = childArray[i];
        let childElement = createHTML(element);
        parent.appendChild(childElement);
    }
}

function createHTML(member) {
    let element = document.createElement("div");
    element.classList.add("card");

    element.innerHTML = ` 
                <img src="${member.url}" alt="">
                <p>${member.title}.</p>
                <img class="pin" src="img/pin.svg" alt="">`;

    return element
}