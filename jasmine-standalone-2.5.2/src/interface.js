$( document ).ready(function() {
  var thermostat = new Thermostat();
    updateTemperature();
    updateSavingMode();
    displayWeather('London')


   $('#temperature-up').on('click', function () {
     thermostat.up();
     updateTemperature();
   })

   $('#temperature-down').on('click', function () {
     thermostat.down();
      updateTemperature();
   })

   $('#temperature-reset').on('click', function () {
     thermostat.reset();
      updateTemperature();
   })

   $('#powersaving-on').on('click', function () {
     thermostat.savingModeOn();
     updateSavingMode();
   })

   $('#powersaving-off').on('click', function () {
     thermostat.savingModeOff();
     updateSavingMode();
   })

function updateTemperature(){
  $('#temperature').text(thermostat._temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

function updateSavingMode(){
  $('#power-saving-status').text(thermostat.savingModeStatus());
  $('#power-saving-status').attr('class', thermostat.savingModeStatus());
}

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })


function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&APPID=3715e27225aa632bcab610f0e65cac29';
  var units = '&units=metric';
  $.get( url + token + units , function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}

})
