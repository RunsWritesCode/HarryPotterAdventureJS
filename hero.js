const Hero = function(name, health, fav_food, tasks, spells) {
  this.name = name;
  this.health = 100;
  this.fav_food = fav_food;
  this.tasks = tasks;
  this.spells = spells;
}

Hero.prototype.speakname = function() {
return `My name is ${this.name}.`;
}

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.numberOfTasks = function () {
  return this.tasks.length;
};

Hero.prototype.completeTask = function (task) {
  task.completed = true;
};

Hero.prototype.eatFood = function (food) {
  if (food.name == this.fav_food && food.poisoned == false){
    this.health += (food.replenishment_value * 1.5)
  }
  else if (food.name == this.fav_food && food.poisoned == true){
    this.health -= food.replenishment_value;
  }
  else if (food.poisoned == true) {
    this.health -= food.replenishment_value;
  }
  else this.health += food.replenishment_value;
};

Hero.prototype.sortTasksByDiff = function () {
  return this.tasks.sort(function (a, b) {
    return a.difficulty - b.difficulty;
  })
};

Hero.prototype.sortTasksByUrgency = function () {
  return this.tasks.sort(function (a, b) {
    return a.urgency - b.urgency;
  })
};

Hero.prototype.viewCompletedTasks = function () {
  return this.tasks.filter(task => task.completed === true);
};

Hero.prototype.viewTasksToDo = function () {
  return this.tasks.filter(task => task.completed === false);
};

Hero.prototype.castSpell = function (spell) {
  if (spell.unforgiveable === false){
  this.health += spell.power;
  }
  else if (spell.unforgiveable === true){
    this.health -= spell.power;
  }
};

Hero.prototype.loseHealth = function (spell) {
  this.health -= spell.power;

};



module.exports = Hero;
