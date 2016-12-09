$( document ).ready(function() {
  var thermostat = new Thermostat();
    updateTemperature();

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
     $('#power-saving-status').text(thermostat.savingModeOn());
   })

   $('#powersaving-off').on('click', function () {
     thermostat.savingModeOff();
     $('#power-saving-status').text(thermostat.savingModeOff());
   })

function updateTemperature(){
  $('#temperature').text(thermostat._temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}

})
