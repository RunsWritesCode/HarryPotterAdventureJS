const Food = function(name, replenishment_value) {
  this.name = name;
  this.replenishment_value = replenishment_value;
  this.poisoned = false;
}

module.exports = Food;
