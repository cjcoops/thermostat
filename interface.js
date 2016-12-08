$(document).ready(function()
{
  var thermostat = new Thermostat();

  updateTemperature();
  displayWeather('London');
  updatePowerSaveStatus();

  $('#up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#save-power-on').on('click', function() {
    thermostat.turnSavePowerOn();
    updateTemperature();
    updatePowerSaveStatus();
  });

  $('#save-power-off').on('click', function() {
    thermostat.turnSavePowerOff();
    updateTemperature();
    updatePowerSaveStatus();
  });

  $('#select-city').submit(function(e) {
    e.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = 'uk&appid=0f442b2b2f3666605e59b18c9a384324&units=metric';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updatePowerSaveStatus() {
    $('#power-saving-status').text(thermostat.powerSaveStatus());
    $('#power-saving-status').attr('class', thermostat.powerSaveStatus());
  }

})
