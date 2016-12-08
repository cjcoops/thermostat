$(document).ready(function()
{
  var thermostat = new Thermostat();

  updateTemperature();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0f442b2b2f3666605e59b18c9a384324&units=metric', function(data) { console.log(data.main.temp); })

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
  });

  $('#save-power-off').on('click', function() {
    thermostat.turnSavePowerOff();
    updateTemperature();
  });

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',uk&appid=0f442b2b2f3666605e59b18c9a384324&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

})
