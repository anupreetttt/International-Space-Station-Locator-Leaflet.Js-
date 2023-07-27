const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();

    console.log(data.latitude);

    document.getElementById('lat').textContent = data.latitude;

    document.getElementById('long').textContent = data.longitude;

}

getData();