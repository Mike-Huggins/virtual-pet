const { Pet } = require('../src/pet.js');

    describe('Pet testing', () => {
      let pet;
      beforeEach(() => {
         pet = new Pet('PoochyPoo');
        });

      xit('creates a new pet when parameters are passed into the constructor function', () => {
        expect(new Pet()).toBeInstanceOf(Object);
      });

      xit('creates a new pet when parameters are passed into the constructor function', () => {
        expect(pet.name).toEqual('PoochyPoo');
        });
      
      xit ('Test that the pet age is 0 at the start', () => {
         expect(pet.age).toEqual(0);
      });

      xit ('Check that the growUp method works correctly and iterates the age by 1', () => {
          pet.growUp();
          expect(pet.age).toEqual(1);
      });

      xit ('check that growUp correctly implements new hunger and fitness levels', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);

      });

      xit ('Test walk function effect on fitness', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
        pet.walk();
        expect(pet.fitness).toEqual(10);
      });

      xit ('Decrease hunger levels test', () => {
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
        pet.feed();
        expect(pet.hunger).toEqual(2);
        pet.feed();
        expect(pet.hunger).toEqual(0);
      });

      xit ('use checkUp function to get current sitrep of pet status', () => {
        expect(pet.checkUp()).toEqual('I feel great!');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
        expect (pet.checkUp()).toEqual('I am hungry');
        pet.hunger = 5
        pet.fitness = 3
        expect (pet.checkUp()).toEqual('I am hungry AND I need a walk');
        pet.feed();
        expect(pet.hunger).toEqual(2);
        pet.feed();
        expect(pet.hunger).toEqual(0);
        expect (pet.checkUp()).toEqual('I need a walk');
      });

      xit ('check if pet is alive', () => {
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
      
      xit('throws an error if the pet is not alive for feed', () => {    
            pet.age = 30;
            expect(pet.feed).toThrow('Your pet is no longer alive :(');
          });   
      
      xit('throws an error if the pet is not alive for growUp', () => {            
            pet.age = 30;
            expect(pet.growUp).toThrow('Your pet is no longer alive :(');
          });   
      
      xit('throws an error if the pet is not alive for walk', () => {    
        pet.age = 30;
            expect(pet.walk).toThrow('Your pet is no longer alive :(');
          });   
          
      xit('throws an error if the pet is not alive for checkUp', () => {    
        pet.age = 30;
            expect(pet.checkUp).toThrow('Your pet is no longer alive :(');
          });   
      
      xit('adoptChild method after creating two instances', () => {
            const parent = new Pet('Dave');
            const child = new Pet('Amelia');
            parent.adoptChild(child);
            expect(parent.children).toEqual([{name: 'Amelia', age: 0, hunger: 0, fitness: 10, children: []}]);
          });
        
      xit('haveBaby method to add child to children property i.e create an instance and then add to children property', () => {
            const parent = new Pet('Dave');
            parent.haveBaby('Amelia');
            expect(parent.children).toEqual([{name: 'Amelia', age: 0, hunger: 0, fitness: 10, children: []}]);
          });
      
      });