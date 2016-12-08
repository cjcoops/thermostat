var Thermostat = function() {
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 25;
  this._isPowerSaveOn = true

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
  this._isPowerSaveOn = false;

};

Thermostat.prototype.turnSavePowerOn = function() {
  this._maximumTemperature = 25;
  this._isPowerSaveOn = true;
  if(this._temperature > this._maximumTemperature)
  { this._temperature = this._maximumTemperature; }
};

Thermostat.prototype.resetTemperature = function() {
  this._temperature = 20;

};

Thermostat.prototype.energyUsage = function() {
  if(this._temperature < 18)
    { return 'low-usage';}
  else if(this._temperature < 25)
    {return 'medium-usage';}
  else
    {return 'high-usage';}
};
