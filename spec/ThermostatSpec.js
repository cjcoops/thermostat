describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
     thermostat = new Thermostat();
  });

  it('should have a default value of 20', function() {
    expect(thermostat._temperature).toEqual(20)
  });
});
