$(document).ready(function()
{
  var thermostat = new Thermostat();

  updateTemperature();

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

  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

})
