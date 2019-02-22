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

    it ('Decrease hunger levels test', () => {
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
    })

});