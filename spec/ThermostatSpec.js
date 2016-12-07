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
});
