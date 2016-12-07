var Thermostat = function() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 25;

};

Thermostat.prototype.up = function() {
  if(this._temperature < this._maximumTemperature)
    { this._temperature += 1; }
  else
    { throw Error('Already at maximum temperature!'); }
};

Thermostat.prototype.down = function() {
  if(this._temperature > this._minimumTemperature)
    { this._temperature -= 1; }
  else
    { throw Error('Already at minimum temperature!'); }
};

Thermostat.prototype.turnSavePowerOff = function() {
  this._maximumTemperature = 32;

};

Thermostat.prototype.turnSavePowerOn = function() {
  this._maximumTemperature = 25;

};

Thermostat.prototype.reset = function() {
  this._temperature = 20;

};
