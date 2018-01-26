const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');

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

  beforeEach(function() {
    getByFluffy = new Task(6, 10, "knowledge", false);
    devilsSnare = new Task(4, 9, "broom", false);
    keys = new Task(7, 2, "knight", false);
    chess = new Task(6, 2, "courage", false);
    troll = new Task(0, 0, "logic", false);
    potions = new Task(4, 2, "nettle wine", false);
    quirell = new Task(10, 9, "philosophers stone", false);
    var tasks = [getByFluffy, devilsSnare, keys, chess, troll, potions, quirell];
    harry = new Hero("Harry Potter", 10, "pumpkin pasties", tasks);
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





})
