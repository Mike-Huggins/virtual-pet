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

    it ('Test walk function effect on fitness', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
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
    });


    it ('use checkUp function to get current sitrep of pet status', () => {
      const pet = new Pet ('PoochyPoo');
      expect(pet.hunger).toEqual(0);
      expect(pet.fitness).toEqual(10);
      expect(pet.checkUp()).toEqual('I feel great!');
      pet.growUp();
      expect(pet.hunger).toEqual(5);
      expect(pet.fitness).toEqual(7);
      expect (pet.checkUp()).toEqual('I am hungry');
      pet.growUp();
      pet.hunger = 5
      pet.fitness = 3
      expect (pet.checkUp()).toEqual('I am hungry AND I need a walk');
      pet.feed();
      expect(pet.hunger).toEqual(2);
      pet.feed();
      expect(pet.hunger).toEqual(0);
      expect (pet.checkUp()).toEqual('I need a walk');
    });

    it ('check if pet is alive', () => {
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
   
    it('throws an error if the pet is not alive for feed', () => {    
          const pet = new Pet('Fido');
          pet.age = 30;
          expect(pet.feed).toThrow('Your pet is no longer alive :(');
        });   
    
    it('throws an error if the pet is not alive for growUp', () => {    
          const pet = new Pet('Fido');
          pet.age = 30;
          expect(pet.growUp).toThrow('Your pet is no longer alive :(');
        });   
    
    it('throws an error if the pet is not alive for walk', () => {    
          const pet = new Pet('Fido');
          pet.age = 30;
          expect(pet.walk).toThrow('Your pet is no longer alive :(');
        });   
        
    it('throws an error if the pet is not alive for checkUp', () => {    
          const pet = new Pet('Fido');
          pet.age = 30;
          expect(pet.checkUp).toThrow('Your pet is no longer alive :(');
        });   
});