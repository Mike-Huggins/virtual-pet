const { Pet } = require('../src/pet.js');

describe('Pet', () => {
    it('creates a new pet when parameters are passed into the constructor function', () => {
      expect(Pet('Bowwow')).toBe('Bowwow')
    });

    it('creates a new pet when parameters are passed into the constructor function', () => {
        expect(Pet ('Poochypoo')).toBe('Poochypoo')
      });

});