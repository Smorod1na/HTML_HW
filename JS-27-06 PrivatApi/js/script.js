const privatURL = 'https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city='

let map;
document.querySelector(".my-input").addEventListener('keydown', function (event) {
  if (event.code == 'Enter') {
    loadData();
  }
});

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
document.querySelector("#searchBtn").onclick = loadData;
let geo = [];

function loadData() {
  let city = document.querySelector("input[type='search']").value
  request(privatURL + city, showTerminals)
}
let cities = [];
async function request(url, callback) {
  let responce = await fetch(url)
  let data = await responce.json()
  callback(data)
  cities = data.devices.map((elem) => {
    return elem.cityUA
  })
}

function showTerminals(alldata) {
  let data = alldata.devices
  console.log(data)

  let main = document.getElementById('main')
  let parent = main.parentElement;
  main.remove();
  geo = [];
  main = document.createElement('div')
  main.setAttribute('id', 'main')
  main.classList.add('row')

  for (let i = 0; i < data.length; i++) {
    geo.push({
      lat: +data[i].latitude,
      long: +data[i].longitude
    })
    let blockFullAddress = document.createElement('div')
    blockFullAddress.classList.add('col-sm-6')

    let blockCity = document.createElement('div')
    blockCity.classList.add('col-sm-2')

    let blockPlace = document.createElement('div')
    blockPlace.classList.add('col-sm-2')
    let btnShowOnMap = document.createElement('button')
    btnShowOnMap.className = 'col-sm-1 btn btn-warning'

    blockFullAddress.innerText = data[i].fullAddressUa
    blockCity.innerText = data[i].cityUA
    blockPlace.innerText = data[i].placeUa

    btnShowOnMap.innerText = "Show On Map"
    btnShowOnMap.setAttribute('data-value', i)
    btnShowOnMap.addEventListener('click', showOnMap)

    main.append(blockFullAddress)
    main.append(blockCity)
    main.append(blockPlace)
    main.append(btnShowOnMap)
    parent.append(main)
  }
}

function showOnMap() {
  const id = this.dataset['value']
  initMap(+geo[id].long, +geo[id].lat, +id)
}

function filterSearch() {
  let li = cities.map((elem) => {
    let prediction = document.createElement('li')
    prediction.innerText = elem
    prediction.style.display = 'none'
    return prediction

  })
  let ul = document.getElementById('autocompleteSearch')
  li.forEach((elem) => {
    ul.append(elem)
  })
  let filter = this.value
}