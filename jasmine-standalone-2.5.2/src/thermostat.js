function Thermostat(){
  this._temperature = 20;
  this._savingMode = true;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if(this._savingMode === true){
    if(this._temperature < 25){
      this._temperature ++;
    }
  }else if(this._temperature < 30){
      this._temperature ++;
    }
};

Thermostat.prototype.down = function() {
  if (this._temperature > 10){
  this._temperature --;
}
};

Thermostat.prototype.savingModeOn = function() {
  this._savingMode = true;
  return 'On'
}

Thermostat.prototype.savingModeOff = function() {
  this._savingMode = false;
  return 'Off'
}

Thermostat.prototype.savingModeStatus = function() {
  if (this._savingMode === true){
    return 'On'
  }else{
    return 'Off'
  }
}

Thermostat.prototype.reset = function(){
  this._temperature = 20;
}

Thermostat.prototype.energyUsage = function(){
  if(this._temperature < 18){
    return 'low-usage';
  }
  else if(this._temperature < 25){
    return 'medium-usage';
  }else{
  return 'high-usage';
}
};
