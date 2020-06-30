// function getWeather(test){

   

// }

// getWeatherAw(2487956);
// getWeatherAw(44418);




// async function getWeatherAw(test){

//     const result = await fetch (`https://cors-anywhere.herokuapp.com//https://metaweather.com/api/location/${test}/`)

//     const data = await result.json();
//     console.log(data);
    
// }
// getWeatherAw(2487956);
// getWeatherAw(44418);

fetch(' https://cors-anywhere.herokuapp.com//https://metaweather.com/api/location/2487956/')
.then(result =>{
    
    console.log(result);
    return result.json();
})
.then(data =>{

    console.log(data);
    
})
.catch (error => console.log(error));