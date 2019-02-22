const { Pet } = require('../src/pet.js');

describe('Pet', () => {
    xit('creates a new pet when parameters are passed into the constructor function', () => {
      expect(new Pet()).toBeInstanceOf(Object)
    });

    xit('creates a new pet when parameters are passed into the constructor function', () => {
        const pet = new Pet ('PoochyPoo');
        expect(pet.name).toEqual('PoochyPoo')
      });

});