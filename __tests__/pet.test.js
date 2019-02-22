const { Pet } = require('../src/pet.js');

describe('Pet', () => {
    xit('creates a new pet when parameters are passed into the constructor function', () => {
      expect(new Pet('Bowwow')).toBeInstanceOf(Object)
    });

    xit('creates a new pet when parameters are passed into the constructor function', () => {
        expect(new Pet ('Poochypoo')).toBeInstanceOf(Object)
      });

});