$( document ).ready(function() {
  var thermostat = new Thermostat();
    updateTemperature();
    updateSavingMode();


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


})
