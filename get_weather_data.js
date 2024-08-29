let getWeather = function (){
    
    let lat;
    let long;
    const apiKey = `2028499a63a37a0056a5c65f5acafa52`;

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log("lat: ", lat, "long: ", long);
                
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}&lang={lang}`;
                
                function getWeatherData(){
                    console.log(url);
                
                    fetch(url)
                    .then(function(response){
                        response.json()
                    .then(function(data){
                        console.log(data);
                        updateWeather(data);
                    });
                    })};
                
                function updateWeather (data) {
                console.log(data);
                let temp = data.main.temp;
                let humidity = data.main.humidity;
                let pressure = data.main.pressure;
                let cloudsPerc = data.clouds.all;
                let windSpeed = data.wind.speed;
                let sunRise = data.sys.sunrise;
                let sunSet = data.sys.sunset;
                console.log(cloudsPerc, sunRise, sunSet);

                document.querySelector(".temp").innerHTML = temp + " &#176C";
                document.querySelector(".humidity").innerHTML = humidity + "%";
                document.querySelector(".pressure").innerHTML = pressure + " hPa";
                document.querySelector(".clouds-perc").innerHTML = cloudsPerc;
                document.querySelector(".wind-speed").innerHTML = windSpeed + "m/s";
                document.querySelector(".sun-rise").innerHTML = sunRise;
                document.querySelector(".sun-set").innerHTML = sunSet;
            }
            getWeatherData();
        });
    };
    }




export default getWeather();