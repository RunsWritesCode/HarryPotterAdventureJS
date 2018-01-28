const Supervillain = function(name, power, health) {
  this.name = name;
  this.power = power;
  this.health = health;
}

Supervillain.prototype.loseHealth = function (spell) {
  this.health -= spell.power;
};

Supervillain.prototype.castSpell = function (spell) {
  if (spell.unforgiveable === false){
  this.health += spell.power;
  }
  else if (spell.unforgiveable === true){
    this.health -= spell.power;
  }
};



module.exports = Supervillain;
