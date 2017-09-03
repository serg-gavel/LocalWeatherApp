// /****************************************************************************************************************************
//  Sergey Gavelyuk "FCC Weather App" Project / 24,08,2017 / more details here: serg-gavel.github.io/projects/ShowTheLocalWeather/
//  *****************************************************************************************************************************/
// var currentWeather = document.getElementById('weather-condition');
// var currentSky = document.getElementById('sky-condition');
// var weatherIcon = document.getElementById('weather-icon');
//
//
// // need to make change classes from .good-weather to .bad-weather when need it
// // also need to change #blue-sky to #grey-sky
//
// // currentSky.classList.add('blue-sky');
// // currentSky.classList.add('grey-sky');
// // currentWeather.classList.add('good-weather');
// // currentWeather.classList.add('bad-weather');
// function goodWeather () {
//     currentSky.classList.add('blue-sky');
//     currentWeather.classList.add('good-weather');
//     currentSky.classList.remove('grey-sky');
//     currentWeather.classList.remove('bad-weather');
// }
// function badWeather() {
//     currentSky.classList.add('grey-sky');
//     currentWeather.classList.add('bad-weather');
//     currentSky.classList.remove('blue-sky');
//     currentWeather.classList.remove('grey-weather');
// }
// function switchIcons() {
//
// }
$(document).ready(function($) {

    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

});

