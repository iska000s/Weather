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
                
                function getWeatherData(){
                    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}&lang={lang}`;
                    console.log(url);
                
                    fetch(url)
                    .then(function(response){
                        response.json()
                    .then(function(data){
                        console.log(data);
                    });
                    });

                };
                getWeatherData();
            });
    };
}

export default getWeather();