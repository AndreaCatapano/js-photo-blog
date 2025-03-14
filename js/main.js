/* 
            <div class="card">
                <img src="https://marcolanci.it/boolean/assets/pictures/1.png" alt="">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <img class="pin" src="img/pin.svg" alt="">
            </div>
*/

const urlApi = "https://lanciweb.github.io/demo/api/pictures/";

axios.get(urlApi).then(response => {
    console.log(response.data)
}).catch(error => console.error(error));


