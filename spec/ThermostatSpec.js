'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start with a temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

});
