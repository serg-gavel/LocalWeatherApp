$(document).ready(function(){
////////////////////////////  IP-API   /////////////////////////////////////////////////////////////////////////////////
    $.getJSON("https://ipapi.co/json/", function(data) {
        console.log(data);
        $('.city-p').append('Location : ' + data.city + ", " + data.country);
        showLocation(data);
    });////////////////////////////  IP-API END   //////////////////////////////////////////////////////////////////////
});
///////https ipapi.com/////
// $.getJSON("https://ipapi.co/json/", function(data) {
//     console.log(data);
//     $('.city-p').append('Location : ' + data.city + ", " + data.country);
//     showLocation(data);
// });
////////////////////////////  IP-API END   //////////////////////////////////////////////////////////////////////
// $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
//     $('.city-p').append('Location : ' + data.city + ", " + data.countryCode);
//     showLocation(data);
// });////////////////////////////  IP-API END   //////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////  SHOW WEATHER FUNCTION  ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showWeather(data) {
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+data.city+"%2C%20"+data.countryCode+"%22)and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data) {
        $('.temp-p').append("Temperature: "+data.query.results.channel.item.condition.temp +" &deg;C");
        $('.visibility-p').append("Visibility: "+data.query.results.channel.atmosphere.visibility +" km");
        $('.humidity-p').append("Humidity: "+data.query.results.channel.atmosphere.humidity +" %");
        $('.weather-condition-p').append("Condition: "+data.query.results.channel.item.condition.text);
        $('.wind-p').append("Wind speed: "+data.query.results.channel.wind.speed+" km/h");
        var condition = data.query.results.channel.item.condition.text;
        switch (condition) {
            case 'Partly Cloudy':
            case 'Mostly Clear':
            case 'Mostly Sunny':
            case 'Sunny':
            case 'Fair':
            case 'Clear':
            case 'Partly Cloud':
            case 'Cloudy':
                $('#sky-condition').toggleClass('blue-sky');
                $('#weather-condition').toggleClass('good-weather');
                break;
            default: function badWeather() {
                $('#sky-condition').toggleClass('grey-sky');
                $('#weather-condition').toggleClass('bad-weather');
            }
            badWeather();
        }
            var $weatherIcon = $('#weather-icon');
            var text = data.query.results.channel.item.condition.text;
            switch (text) {
                case 'Partly Cloud':
                case 'Partly Cloudy': $weatherIcon.toggleClass('partly-cloudy');
                    break;
                case 'Sunny':
                case 'Fair':
                case 'Clear':
                case 'Mostly Sunny':
                case 'Mostly Clear': $weatherIcon.toggleClass('sun');
                    break;
                case 'Cloudy':
                case 'Mostly Cloudy': $weatherIcon.toggleClass('clouds');
                    break;
                case 'Isolated Thunderstorms':
                case 'Thundershowers':
                case 'Heavy Thunderstorms':
                case 'PM Thunderstorms':
                case 'Light Rain with Thunder':
                case 'Scattered Thunderstorms': $weatherIcon.toggleClass('thunder-storm');
                    break;
                case 'Rain':
                case 'AM Rain':
                case 'PM Rain':
                case 'Showers':
                case 'Heavy Rain':
                case 'Light Rain':
                case 'AM Showers':
                case 'Scattered Showers':
                case 'PM Showers': $weatherIcon.toggleClass('rain');
                    break;
                default: console.log(text);
            }
///////////////////////////////////CELSIUS TO FAHRENHEIT////////////////////////////////////////////////////////////////
        var toggleUnit = false;
        var currentCelsius = data.query.results.channel.item.condition.temp;
        function convertToF(celsius) {
            var fahrenheit;
            fahrenheit = celsius * 1.8 + 32;
            return fahrenheit;
        }
        var fahrenheit = convertToF(currentCelsius).toFixed(1);
        var btn = $('.temp-button');
            btn.click(function (p) {
                if (toggleUnit === false){
                    p = $('.temp-p');
                    p.empty();
                    p.append('Temperature: '+ fahrenheit+' &deg;F');
                    toggleUnit = true;
                }else{
                    p = $('.temp-p');
                    p.empty();
                    p.append('Temperature: '+ currentCelsius+' &deg;C');
                    toggleUnit = false;
                }
        });///////////////////////////////END CELSIUS TO FAHRENHEIT/////////////////////////////////////////////////////
    });
}///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////  SHOW WEATHER FUNCTION END/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showLocation(data) {
showWeather(data);
}

