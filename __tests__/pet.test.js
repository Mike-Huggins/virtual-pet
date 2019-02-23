const { Pet } = require('../src/pet.js');

describe('Pet', () => {
    xit('creates a new pet when parameters are passed into the constructor function', () => {
      expect(new Pet()).toBeInstanceOf(Object);
    });

    xit('creates a new pet when parameters are passed into the constructor function', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.name).toEqual('PoochyPoo');
      });
    
    xit ('Test that the pet age is 0 at the start', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.age).toEqual(0);
    });

    xit ('Check that the growUp method works correctly and iterates the age by 1', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.age).toEqual(0);
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    xit ('check that growUp correctly implements new hunger and fitness levels', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);

    });

    xit ('Test walk function effect on fitness', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
      pet.growUp();
      expect(pet.hunger).toEqual(10);
      expect(pet.fitness).toEqual(4);
      pet.walk();
      expect(pet.fitness).toEqual(8);
      pet.walk();
      expect(pet.fitness).toEqual(10);
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });

    xit ('Decrease hunger levels test', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
      pet.feed();
      expect(pet.hunger).toEqual(2);
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });


    xit ('use checkUp function to get current sitrep of pet status', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      expect(pet.checkUp()).toEqual('I feel great!');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
      expect (pet.checkUp()).toEqual('I am hungry');
      pet.growUp();
      expect(pet.hunger).toEqual(10);
      expect(pet.fitness).toEqual(4);
      expect (pet.checkUp()).toEqual('I am hungry');
      pet.growUp();
      expect(pet.hunger).toEqual(15);
      expect(pet.fitness).toEqual(1);
      expect (pet.checkUp()).toEqual('I am hungry AND I need a walk');
      pet.feed();
      expect(pet.hunger).toEqual(12);
      pet.feed();
      expect(pet.hunger).toEqual(9);
      pet.feed();
      expect(pet.hunger).toEqual(6);
      pet.feed();
      expect(pet.hunger).toEqual(3);
      expect (pet.checkUp()).toEqual('I need a walk');
    });

    xit ('check if pet is alive', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.isAlive).toEqual(true);
      pet.age = 31;
      expect(pet.isAlive).toEqual(false);
      pet.age = 5;
      expect(pet.isAlive).toEqual(true);
      pet.hunger = 11;
      expect(pet.isAlive).toEqual(false);
      pet.hunger = 0;
      expect(pet.isAlive).toEqual(true);
      pet.fitness = 0;
      expect(pet.isAlive).toEqual(false);
      pet.fitness = 10;
      expect(pet.isAlive).toEqual(true);
    });
   
});