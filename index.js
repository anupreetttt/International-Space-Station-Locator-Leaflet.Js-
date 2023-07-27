const mymap = L.map('issMap').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap'
}).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();

    console.log(data.latitude);

    document.getElementById('lat').textContent = data.latitude;

    document.getElementById('long').textContent = data.longitude;

}

getData();