const maximumFitness = 10;
const ageAtBirth = 0
const ageAtDeath = 30
const maxHungerBeforeDeath = 10
const minFitnessBeforeDeath = 0


function Pet(name) {
    this.name = name;
    this.age = ageAtBirth;
    this.hunger = 0;
    this.fitness = maximumFitness;
    this.children = [];
  };

  Pet.prototype = {
    get isAlive() {
      return this.age < ageAtDeath && this.hunger < maxHungerBeforeDeath && this.fitness > minFitnessBeforeDeath;
    }
  };

Pet.prototype.growUp = function() { 
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.age ++; 
  this.hunger +=5;
  this.fitness -=3;
};

Pet.prototype.walk = function() {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if(this.fitness >= 6){
  this.fitness = maximumFitness
  }
  if(this.fitness < 6){
    this.fitness +=4
  }
};

Pet.prototype.feed = function() {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
    if(this.hunger < 3){
    this.hunger = 0
  }
  if(this.hunger >= 3){
    this.hunger -=3
  }
};

Pet.prototype.checkUp = function() {
  if(!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  if(this.fitness >3 && this.hunger <5){
    return 'I feel great!'
  };
  if(this.hunger >= 5 && this.fitness >3){
    return 'I am hungry'
  };
  if(this.hunger < 5 && this.fitness <=3){
    return 'I need a walk'
  };
  if(this.fitness <= 3 && this.hunger >= 5){
    return 'I am hungry AND I need a walk'
  };
};

Pet.prototype.adoptChild = function(child) {
  this.children.push(child)
}

Pet.prototype.haveBaby = function (childName) {
  const child = new Pet(childName);
  this.children.push(child);
};

module.exports =  {
Pet
}