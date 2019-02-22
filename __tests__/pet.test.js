const { Pet } = require('../src/pet.js');

describe('Pet', () => {
    it('creates a new pet when parameters are passed into the constructor function', () => {
      expect(new Pet()).toBeInstanceOf(Object);
    });

    it('creates a new pet when parameters are passed into the constructor function', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.name).toEqual('PoochyPoo');
      });
    
    it ('Test that the pet age is 0 at the start', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.age).toEqual(0);
    });

    it ('Check that the growUp method works correctly and iterates the age by 1', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.age).toEqual(0);
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it ('check that growUp correctly implements new hunger and fitness levels', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);

    });

});