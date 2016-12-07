var Thermostat = function() {
  this._temperature = 20;
};

Thermostat.prototype.up = function() {
  this._temperature += 1;

};

Thermostat.prototype.down = function() {
  this._temperature -= 1;

};
