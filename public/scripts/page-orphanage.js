const options = {
    dragging: false,
    touchzoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// creat map //
const map = L.map('mapid', options).setView([-19.9337438,-43.9395581], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// creat icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// creat and add map
L.marker([-19.9337438,-43.9395581], { icon })
.addTo(map)

   
/* image galerry */

function selectImage(event) {
    const button = event.currentTarget;

    // remover todas as classes .active //
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => button.classList.remove('active'));

    button.classList.add('active')

    // selecionar a image clicada 
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

     // atualizar o container de image
     imageContainer.src = image.src

    }


   
   

    // atualizar o container de image

    //adicionar a classe .active para esse botão
    


    