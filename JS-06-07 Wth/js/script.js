let cityName = "";
let iconPath = "http://openweathermap.org/img/wn/"
let Found_404 = document.querySelector(".notFound")
let myCity = document.getElementById("cityName")
let myDate = document.getElementById("DateNow")
let weatherNow = document.getElementById("weatherNow")
let img = document.getElementById("iconWeatherNow")
let tempNow = document.getElementById('tempNow')
let tempMin = document.getElementById('min')
let tempMax = document.getElementById('max')
let windSp = document.getElementById('windSp')

document.querySelector("#search").onclick = loadWeather

function loadWeather(event) {
    event.preventDefault()
    // console.log("hello")
    cityName = document.querySelector("input[type='search']").value
    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21d41fca71391c45384e06340e7ae57e`
    request(apiWeather, showCityWeather)
}
async function request(url, callback) {
    let responce = await fetch(url)
    let data = await responce.json()
    callback(data)
}
let lat = ""
let lon = ""

function showCityWeather(data) {
    if (data.cod == "404")
        Found_404.classList.remove("none")
    else {

        console.log(data)
        lat = data.coord.lat
        lon = data.coord.lon
        tempNow.innerText = Math.trunc(data.main.temp - 273) + "`C";
        tempMin.innerText = Math.trunc(data.main.temp_min - 273) + "`C";
        tempMax.innerText = Math.trunc(data.main.temp_max - 273) + "`C";
        windSp.innerText = Math.trunc(data.wind.speed);
        img.src = iconPath + data.weather[0].icon + "@2x.png"
        weatherNow.innerText = data.weather[0].description
        myCity.innerText = cityName
        myDate.innerText = new Date().toUTCString()

        let weather3Hour = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity.innerText}&appid=21d41fca71391c45384e06340e7ae57e`;
        request(weather3Hour, showCity3HourWeather)
    }
}

function showCity3HourWeather(data) {
    let bottomDivHour = document.getElementById("HourWeather");

    let d = new Date()
    document.getElementById("DayNow").innerText = d.getUTCDay()
    console.log(d.getUTCDay())
    if (bottomDivHour.children.length > 1) {
        for (let j = 5; j >= 1; j--) {
            console.log(bottomDivHour.children[j])
            bottomDivHour.lastElementChild.remove()
        }
    };
    for (let i = 0; i < 5; i++) {
        console.log('before')
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.innerText = data.list[i].dt_txt.split(" ")[1]
        div.append(a)
        let img = document.createElement("img")
        img.src = iconPath + data.list[i].weather[0].icon + "@2x.png"
        div.append(img)
        let span1 = document.createElement("span")
        span1.innerText = data.list[i].weather[0].main
        div.append(span1)
        let span2 = document.createElement("span")
        span2.innerText = Math.trunc(data.list[i].main.temp_max - 273) + "`C";
        div.append(span2)
        let span3 = document.createElement("span")
        span3.innerText = data.list[i].wind.speed
        div.append(span3)
        bottomDivHour.append(div)
    }
    document.querySelector("input[type='button']").onclick = initMap(lat, lon)
}

function initMap(newLat = 50.6230800, newLng = 26.2274300, id = 0) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: newLat,
            lng: newLng
        },
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {
            lat: newLat,
            lng: newLng
        },
        map: map
    });
}