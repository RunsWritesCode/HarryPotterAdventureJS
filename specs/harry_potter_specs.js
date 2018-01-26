const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food');
const Rat = require('../rat');

describe('Harry Potter', function() {

let harry;
let hero;
let task;
let getByFluffy;
let devilsSnare;
let keys;
let chess;
let troll;
let potions
let quirell;
let food;
let pumpkinPasties;
let butterBeer;
let chocolateFrog;
let rat;
let peter;

  beforeEach(function() {
    getByFluffy = new Task(3, 10, "knowledge", false);
    devilsSnare = new Task(4, 9, "broom", false);
    keys = new Task(7, 6, "knight", false);
    chess = new Task(6, 3, "courage", false);
    troll = new Task(0, 0, "logic", false);
    potions = new Task(5, 2, "nettle wine", false);
    quirell = new Task(10, 8, "philosopher's stone", false);
    var tasks = [getByFluffy, devilsSnare, keys, chess, troll, potions, quirell];
    harry = new Hero("Harry Potter", 10, "pumpkin pasties", tasks);
    pumpkinPasties = new Food("pumpkin pasties", 4);
    butterBeer = new Food("butter beer", 6);
    peter = new Rat("Peter Pettigrew");

  })

  it('can speak name', function() {
    harry.speakname(harry);
    assert.strictEqual(harry.speakname(), "My name is Harry Potter.");

  })

  it('can add task', function() {
    harry.addTask(chess);
    assert.strictEqual(harry.numberOfTasks(), 8);
  })

  it('can complete task', function() {
    harry.completeTask(getByFluffy);
    assert.strictEqual(getByFluffy.completed, true);
  })

  it('hero can eat food and increase health', function() {
    harry.eatFood(butterBeer);
    assert.strictEqual(harry.health, 16);
  })

  it('hero can eat favourite food and increase health', function() {
    harry.eatFood(pumpkinPasties);
    assert.strictEqual(harry.health, 16);
  })

  it('hero can eat favourite food and not favs and increase health', function() {
    harry.eatFood(pumpkinPasties);
    harry.eatFood(butterBeer);
    assert.strictEqual(harry.health, 22);
  })

  it('hero can sort tasks by difficulty', function() {
    harry.sortTasksByDiff();
    assert.deepEqual(harry.sortTasksByDiff(), [troll, getByFluffy, devilsSnare, potions, chess, keys, quirell]);
  })

  it('hero can sort tasks by urgency', function() {
    harry.sortTasksByUrgency();
    assert.deepEqual(harry.sortTasksByUrgency(), [troll, potions, chess, keys, quirell, devilsSnare, getByFluffy]);
  })

  it('hero can view tasks marked complete', function() {
    harry.completeTask(getByFluffy);
    harry.completeTask(devilsSnare);
    assert.deepEqual(harry.viewCompletedTasks(), [getByFluffy, devilsSnare]);
  })

  it('hero can view tasks still to do', function() {
    harry.completeTask(getByFluffy);
    harry.completeTask(devilsSnare);
    harry.completeTask(potions);
    harry.completeTask(chess);
    harry.completeTask(troll);
    assert.deepEqual(harry.viewTasksToDo(), [keys, quirell]);
  })

  it('rat can touch food', function() {
    peter.touchFood(pumpkinPasties);
    assert.strictEqual(pumpkinPasties.poisoned, true);
  })

})
