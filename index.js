const mymap = L.map('issMap').setView([51.505, -0.09], 5);
const marker = L.marker([0,0]).addTo(mymap);

const circle = L.circle([0, 0], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap'
}).addTo(mymap);



const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstZoom = true;
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();


    const longitude = data.longitude;
    const latitude = data.latitude;

    console.log(longitude);

    marker.setLatLng([latitude, longitude]);

    circle.setLatLng([latitude, longitude]);
    if(firstZoom) {
    mymap.setView([latitude, longitude], 2)
    firstZoom = false;    
}
    document.getElementById('lat').textContent = latitude.toFixed(2);

    document.getElementById('long').textContent = longitude.toFixed(2);

}

getData();

setInterval(getData, 1000); 