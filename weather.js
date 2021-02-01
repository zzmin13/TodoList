const weather = document.querySelector(".js-weather");

const API_KEY = "8789a4252c50636a7c1aa3842c1d8328";
const COORDS = 'coords';


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
           return response.json()
        }).then(function(json){
            const temperature = json.main.temp; // 현재 온도
            const place = json.name;    //현재 도시 이름
            const weatherState = json.weather[0].main; // 날씨 상태 ex) cloud
            weather.innerHTML = `${weatherState}, ${temperature}˚ @ ${place}`;
        });
    
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude; //latitude는 위도, longitude는 경도
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Can't access geo location!");
}
function askForCoords(){
    //navigator API 사용
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
}
init();