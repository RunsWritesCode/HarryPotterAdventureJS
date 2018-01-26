const Hero = function(name, health, fav_food, tasks) {
  this.name = name;
  this.health = 10;
  this.fav_food = fav_food;
  this.tasks = tasks;
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
  if (food.name == this.fav_food){
    this.health += (food.replenishment_value * 1.5)
  }
  else this.health += food.replenishment_value;
};

module.exports = Hero;
