const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");
form.addEventListener("submit",search);

let target = "mumbai";

const fetchData = async(target) => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=e33446f340754de99b7145921232202&q=${target}`;


    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    updateDom( data.current.temp_c, data.location.name , data.current.last_updated , data.current.condition.icon , data.current.condition.text);
    } 
    
    catch (error) {
        alert("Location not found");
    }
};

function updateDom(temp,city,time,emoji,text) {

    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();


    temperatureField.innerText = temp;
    cityField.innerText = city;
    dateField.innerText = `${exactTime} - ${getDayFullName(exactDay)}  ${exactDate}`;
    emojiField.src = emoji;
    weatherField.innerText = text;
}


fetchData(target);



function search(e) {
    e.preventDefault();
    let target = searchField.value;
    fetchData(target);
}



function getDayFullName(num) {
    switch(num) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 5:
            return "Saturday";
            break;
        default:
            return "Don't know";
            break;
    }
}




