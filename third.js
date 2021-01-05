// const API = 'https://randomuser.me/api/?results='


// getUsers = async() => {
//     let num = document.getElementById('limitUsers')
//     let numValue = num.value

//     let resp = await fetch(API + numValue)
//     let data = await resp.json()
//     console.log(data)
//     data = data.results
//     num.value = ''
//     const output = document.getElementById('output')

//     output.innerHTML = ''
//     data.forEach(element => {
//         createCard(element, output)
//     });
// }
// createCard = (element, output) => {
//     let card = document.createElement('div')
//     let img = document.createElement('img')
//     let name = document.createElement('h3')
//     let phone = document.createElement('b')
//     let email = document.createElement('b')
//     let address = document.createElement('p')
//     let nationality = document.createElement('span')
//     let gender = document.createElement('h3')
//     card.classList = 'card'
//     name.classList = 'name'
//     phone.classList = 'phone'
//     email.classList = 'email'
//     address.classList = 'address'
//     nationality.classList = 'nat'
//     gender.classList = 'gender'
//     img.src = element.picture.large
//     name.innerHTML = 'Name : ' + element.name.title + ' ' + element.name.first + ' ' + element.name.last
//     phone.innerHTML = element.phone
//     email.innerHTML = ' ' + element.email
//     address.innerHTML = element.location.street.name + ' ' + element.location.street.number
//     nationality.innerHTML = element.nat
//     gender.innerHTML = element.gender
//     card.appendChild(img)
//     card.appendChild(name)
//     card.appendChild(phone)
//     card.appendChild(email)
//     card.appendChild(address)
//     card.appendChild(nationality)
//     card.appendChild(gender)
//     output.appendChild(card)
// }
var map;
const API = 'http://api.openweathermap.org/data/2.5/weather?q='
const APIKEY = 'ad3ffd3cda243452e12198103235f9a6'

render = (data) => {
    let out = document.getElementById('output')
    out.innerHTML = ''
    getMap(data.coord, data.main.temp)

}

getCity = async() => {
    let cityName = document.getElementById('city')
    let city = cityName.value
    let url = API + city + '&appid=' + APIKEY

    let response = await fetch(url)
    let result = await response.json()

    console.log(result)
    render(result)
}

getMap = (coord, temp) => {
    let divMap = document.createElement("div")
    divMap.id = 'map'
    divMap.style.width = "500px"
    divMap.style.height = "400px"
    let output = document.getElementById('output')
    output.appendChild(divMap)

    DG.then(function() {
        let temple = temp - 273.15
        temple = temple.toFixed(0)
        map = DG.map('map', {
            center: [coord.lat, coord.lon],
            zoom: 13
        });

        DG.marker([coord.lat, coord.lon]).addTo(map).bindPopup(temple + ' *C');
    });

}