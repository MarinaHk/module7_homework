function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
} 
  
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " подключен!");
    this.isPlugged = true;
}
  
ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}
  
const lampa = new ElectricalAppliance('лампа', 50);
const PC = new ElectricalAppliance('компьютер', 1000);
  
console.log(lampa.getPowerUsed() + PC.getPowerUsed());
  
lampa.plugIn();
console.log(lampa.getPowerUsed() + PC.getPowerUsed());
  
PC.plugIn();
console.log(lampa.getPowerUsed() + PC.getPowerUsed());

  
