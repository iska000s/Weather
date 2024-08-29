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
                const temp = data.main.temp;
                const humidity = data.main.humidity;
                const pressure = data.main.pressure;
                const cloudsPerc = data.clouds.all;
                const windSpeed = data.wind.speed;
                const sunRise = new Date(data.sys.sunrise *1000);
                const sunSet = new Date(data.sys.sunset *1000);
                const locationName = data.name;
                console.log("Temp: " + temp, "Humidity: " + humidity, "Pressure: " + pressure, "Clouds Perc.: " + cloudsPerc, "Wind speed: " + windSpeed, "Sun rise: " + sunRise, "Sun set: " + sunSet);

                document.getElementById("temp").innerHTML = temp;
                // document.querySelector(".temp").innerHTML = temp + " &#176C";
                document.getElementById("humidity").innerHTML = humidity + "%";
                document.getElementById("pressure").innerHTML = pressure + " hPa";
                document.getElementById("clouds-perc").innerHTML = cloudsPerc;
                document.getElementById("wind-speed").innerHTML = windSpeed + "m/s";
                document.getElementById("sun-rise").innerHTML = sunRise.getHours() + ":" + sunRise.getMinutes();
                document.getElementById("sun-set").innerHTML = sunSet.getHours() + ":" + sunRise.getMinutes();
                
                let imgUrl = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
                document.getElementById("icon-weather").setAttribute("src", imgUrl);

                const locationLink = document.getElementById("location-link");
                locationLink.innerHTML = locationName;
                locationLink.href = `https://openstreetmap.org/#map=2/${lat}/${long}`;
            }
            getWeatherData();
        });
    };
    }




export default getWeather();