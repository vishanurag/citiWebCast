

async function  ip_tracker() {

    let url = "https://ipinfo.io/json?" + //YOUR API TOKEN ;
    let response = await fetch(url);
    let ip_data = await response.json();

    console.log(ip_data.city);

    checkWeather(ip_data.city);
};

ip_tracker();