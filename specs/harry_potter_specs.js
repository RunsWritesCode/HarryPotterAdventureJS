const assert = require('assert');
const Hero = require('../hero');
const Task = require('../task');
const Food = require('../food');
const Rat = require('../rat');
const Spell = require('../spell');
const Supervillain = require('../supervillain');

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
let spell;
let supervillain;
let voldemort;

  beforeEach(function() {
    getByFluffy = new Task(3, 10, "knowledge", false);
    devilsSnare = new Task(4, 9, "broom", false);
    keys = new Task(7, 6, "knight", false);
    chess = new Task(6, 3, "courage", false);
    troll = new Task(0, 0, "logic", false);
    potions = new Task(5, 2, "nettle wine", false);
    quirell = new Task(10, 8, "philosopher's stone", false);
    alohomora = new Spell("Alohomora", 4, false);
    expectoPatronum = new Spell("Expecto patronum", 9, false);
    bombardoMaxima = new Spell("Bombarda Maxima", 20, false);
    crucio = new Spell("Crucio", 50, true);
    var tasks = [getByFluffy, devilsSnare, keys, chess, troll, potions, quirell];
    var spells = [alohomora, expectoPatronum, bombardoMaxima];
    harry = new Hero("Harry Potter", 100, "pumpkin pasties", tasks, spells);
    pumpkinPasties = new Food("pumpkin pasties", 4);
    butterBeer = new Food("butter beer", 6);
    peter = new Rat("Peter Pettigrew");
    voldemort = new Supervillain("Voldemort", 10, 100);

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
    assert.strictEqual(harry.health, 106);
  })

  it('hero can eat favourite food and increase health', function() {
    harry.eatFood(pumpkinPasties);
    assert.strictEqual(harry.health, 106);
  })

  it('hero can eat favourite food and not favs and increase health', function() {
    harry.eatFood(pumpkinPasties);
    harry.eatFood(butterBeer);
    assert.strictEqual(harry.health, 112);
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

  it('hero can eat poisonous food and lose health', function(){
    peter.touchFood(pumpkinPasties);
    harry.eatFood(pumpkinPasties);
    assert.strictEqual(harry.health, 96);
  })

  it('hero can use spell to increase health', function() {
    harry.castSpell(expectoPatronum);
    assert.strictEqual(harry.health, 109);
  })

  it('supervillain can take damage', function(){
    voldemort.loseHealth(expectoPatronum);
    assert.strictEqual(voldemort.health, 91);
  })

  it('hero can take damage', function() {
    harry.loseHealth(crucio);
    assert.strictEqual(harry.health, 50);
  })

  it('hero can fight supervillain', function() {
    harry.castSpell(bombardoMaxima);
    voldemort.loseHealth(bombardoMaxima);
    voldemort.castSpell(crucio);
    harry.loseHealth(crucio);
    assert.strictEqual(harry.health, 70);
    assert.strictEqual(voldemort.health, 30);
  })

  it('using an unforgiveable spell decreases health', function() {
    voldemort.castSpell(crucio);
    assert.strictEqual(voldemort.health, 50);
  })

  it('harry can use an unforgiveable', function() {
    harry.castSpell(crucio);
    assert.strictEqual(harry.health, 50);
  })

})
