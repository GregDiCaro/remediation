const APIKEY ="c0eeac2ce2be28fb5b3a1d5bd61f4ca0";

let apiCall = function(city){

    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c0eeac2ce2be28fb5b3a1d5bd61f4ca0

fetch(url).then((response) =>
    
    response.json().then((data) => {

        console.log(data);
        document.querySelector("#city").innerHTML= `<i class="fas fa-city"></i>`+ data.name;
        document.querySelector("#temp").innerHTML= `<i class="fas fa-thermometer-half"></i>` + data.main.temp;
        document.querySelector("#humidity").innerHTML= `<i class="fas fa-tint"></i>`+ data.main.humidity + " %";
        document.querySelector("#wind").innerHTML= `<i class='fas fa-wind'></i>`+ data.wind.speed + "km/h";
    })
    
        
    ).catch(err => console.log('Erreur : '+ err));
    

};

    document.querySelector('form').addEventListener('submit', function(e){

            e.preventDefault();
            let ville = document.querySelector("#inputcity").value;

            apiCall(ville);
    });

    apiCall("Liege");