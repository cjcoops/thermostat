describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
     thermostat = new Thermostat();
  });

  it('should have a default value of 20', function() {
    expect(thermostat._temperature).toEqual(20)
  });

  it('should change the temperature by one with up function', function(){
    thermostat.up()
    expect(thermostat._temperature).toEqual(21)
  });

  it('should change the temperature by one with down function', function(){
    thermostat.down()
    expect(thermostat._temperature).toEqual(19)
  });

  it('should have a minimum temperature of 10', function() {
    expect(thermostat._minimumTemperature).toEqual(10)
  });

  it("shouldn't let the down function go below minimum temperature", function() {
    thermostat._temperature = 10;
    expect( function(){thermostat.down(); }).toThrowError('Already at minimum temperature!');
  });

  it('should have a max temp of 25 when power saving is on', function() {
    expect(thermostat._maximumTemperature).toEqual(25);
  });

  it("shouldn't let the up function go above maximum temperature", function() {
    thermostat._temperature = 25;
    expect( function(){thermostat.up(); }).toThrowError('Already at maximum temperature!');
  });

  it("should change the maximum temp after the power save mode was turned off", function(){
    thermostat.turnSavePowerOff()
    expect(thermostat._maximumTemperature).toEqual(32);
    expect(thermostat._isPowerSaveOn).toEqual(false);
  });

  it("should change the maximum temp after the power save mode was turned off", function(){
    thermostat.turnSavePowerOn()
    expect(thermostat._maximumTemperature).toEqual(25);
    expect(thermostat._isPowerSaveOn).toEqual(true);

  });

  it("should have a reset function that sets temperature at 20", function(){
    thermostat.resetTemperature()
    expect(thermostat._temperature).toEqual(20);
  });

  it("should be able to tell when the energy usage is low", function() {
    thermostat._temperature = 17;
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it("should be able to tell when the energy usage is medium", function() {
    thermostat._temperature = 24;
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it("should be able to tell when the energy usage is high", function() {
    thermostat._temperature = 28;
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });

  it('should change temp to 25 when power is put on', function() {
    thermostat.turnSavePowerOff();
    thermostat._temperature = 28;
    thermostat.turnSavePowerOn();
    expect(thermostat._temperature).toEqual(25);
  });

});
