let loadingArrowCircle = document.getElementById('loadingArrowCircle');
let weather_Details = document.getElementById('weather_Details');
let reload_page = 1;


async function  checkWeather(cityName){
	if(cityName == "") {
		return;
	}

	
	 const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityName;
	 const options = {
	 	method: 'GET',
	 	headers: {
	 		'content-type': 'application/octet-stream',
	 		'X-RapidAPI-Key': // YOUR API NINJAS KEY,
	 		'X-RapidAPI-Host': // YOUR API NINJAS KEY
	 	}
	 };
	
	 try {
	 	const response = await fetch(url, options);
	 	let result = await response.text();
	 	cityData = JSON.parse(result);
		
	 	if( cityData.temp != undefined) {
			
			cityName_Output.innerHTML = cityName;
			temp.innerHTML = cityData.temp;
			wind_speed.innerHTML = cityData.wind_speed + " m/s";
			humidity.innerHTML =  cityData.humidity + "%";
			// console.log(cityData);
			
		} else {
			 cityName_Output.innerHTML = "<h3 class='text-danger'>Details Not found</h3>";
	 		temp.innerHTML = "";
	 		wind_speed.innerHTML = "";
	 		humidity.innerHTML = "";
			 
		}
	} catch (error) {
		//  cityName_Output.innerHTML = "<h3 class='text-danger'>Details Not found</h3>";
	 	// console.error(error);
	 }
	
	loadingArrowCircle.classList.toggle('loadingArrowCircle_Rotate'); 
	if(reload_page == 1) {
		reload_page = 0;
		weather_Details.classList.remove('dNone');
	}
	setTimeout(() => {
		loadingArrowCircle.classList.toggle('loadingArrowCircle_Rotate'); 
		
	}, 1000);
	
	
}
checkWeather("delhi");