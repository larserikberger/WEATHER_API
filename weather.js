GetData();

async function GetData() {

    let myWeather = await fetchData('http://api.apixu.com/v1/forecast.json?key=850e39a568c0423599b132318181203&q=stockholm&days=5');

    let currentDay = document.createElement('div');
    currentDay.setAttribute('id', 'currentDiv');

    /*
    let currentDate = new Date(myWeather.current.last_updated); 
    currentDay.innerHTML = "<h1 id = 'currentWeekDay'>" + currentDate.toLocaleString( "en-GB" , { weekday: 'long' }) + "</h1><br>";
    */

    currentDay.innerHTML += "<p id = 'currentStad'>" + myWeather.location.name + "</p>";
    currentDay.innerHTML += "<h1 id = 'currentTemp'>" + myWeather.current.temp_c + "°</h1>";
    currentDay.innerHTML += currentDay.innerHTML = "<img src='http://" + myWeather.current.condition.icon + "' id = 'bildCurrent'>";
    currentDay.innerHTML += "<p id = 'currentTid'> Last updated: " + myWeather.location.localtime + "</p><hr> ";


    document.body.appendChild(currentDay);


    for (forecastDay of myWeather.forecast.forecastday) {
        let divDay = document.createElement('div');
        divDay.setAttribute('id', 'currentDiv');
        let tempDate = new Date(forecastDay.date)
        
        tempDate.setDate(tempDate.getDate()+1);

        divDay.innerHTML = "<h1 id='weekDays'>" + tempDate.toLocaleString("en-GB", {
            weekday: 'long'
        }) + "</h1><br>";
        //divDay.innerHTML += "<strong>" + forecastDay.date + "</strong><br>";
        divDay.innerHTML += "<img src='http://" + forecastDay.day.condition.icon + "' id = 'bildDay'><br>";
        divDay.innerHTML += "<h1 id='avgTemp'>" + forecastDay.day.avgtemp_c + "°</h1><br>";
        divDay.innerHTML += "<h1 id ='maxTemp'> Max temp: " + forecastDay.day.maxtemp_c + "°</h1><br>";
        divDay.innerHTML += "<h1 id ='minTemp'> Min temp: " + forecastDay.day.mintemp_c + "°</h1><hr>";
        
        
        
        document.body.appendChild(divDay);

        console.log(forecastDay);
    }



    console.log(myWeather);

}


async function fetchData(url) {

    let promise = await fetch(url);

    let data = await promise.json();

    return data;

}