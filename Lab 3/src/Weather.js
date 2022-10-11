export default class Weather {
    constructor(api_key) {
        this.apiKey = api_key;

        // check if weather data is in localstorage and if timestamp is older than 10 minutes
        if (localStorage.getItem('weather') && Date.now() - localStorage.getItem('weather_timestamp') < 600000) {
            // get data from localstorage
            const weatherData = JSON.parse(localStorage.getItem('weather'));
            this.displayWeather(weatherData);
        } 
        else {
            this.getLocation();
        }
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getWeather.bind(this));
        } 
        else {
            console.log("Geolocation is not supported by this browser.");
        }      
    }

    getWeather(position) {
        console.log(this);
        console.log(position);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // save to localstorage
                localStorage.setItem('weather', JSON.stringify(data));

                // save timestamp
                localStorage.setItem('weather_timestamp', Date.now());

                this.displayWeather(data);
            });
    }

    displayWeather(data) {
        // Weather API
        const temp = data.current.temp_c;
        const weather = data.current.condition.text;
        const location = data.location.name;

        const img = document.createElement("img");
        img.src = data.current.condition.icon;
        img.alt = weather;

        document.querySelector('.weather__temp').innerText = "It's " + temp + "°C outside!";
        document.querySelector('.weather__summary').innerText = "Whoa, look at that! It's " + weather + ".";
        // document.querySelector('.weather__location').innerText = location;
        document.querySelector('.weather__icon').appendChild(img);

        if(temp <= 10){
            this.getColdWeather();
        }
        else {
            this.getHotWeather();
        }
    }

    getColdWeather() {
        // console.log("Cold weather.");
        let url = "https://api.disneyapi.dev/characters";

        fetch(url)
        .then( result => {
            return result.json();
        })
        .then((json)=>{
            // console.log(json);
            this.printColdWeather(json);
        });
    }

    getHotWeather() {
        // console.log("Cold weather.");
        let url = "https://api.disneyapi.dev/characters";

        fetch(url)
        .then( result => {
            return result.json();
        })
        .then((json)=>{
            // console.log(json);
            this.printHotWeather(json);
        });
    }

    printColdWeather(json) {
        let name = json.data[2].name;
        let imageUrl = json.data[2].imageUrl;
        document.querySelector("#app").style.backgroundColor = "#EB626C"; 
        document.querySelector(".disney__movie").src = imageUrl;
        document.querySelector(".disney__title").innerHTML = "Time to watch... " + name + " on Disney+! 😈🔥";
    }

    printHotWeather(json) {
        let name = json.data[42].name;
        let imageUrl = json.data[42].imageUrl;
        (document.querySelector("#app").style.backgroundColor = "#FDC685");
        document.querySelector(".disney__movie").src = imageUrl;
        document.querySelector(".disney__title").innerHTML = "Time to watch... " + name + " on Disney+! 👩🐟";
    }
}