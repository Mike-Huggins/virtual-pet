const maximumFitness = 10;
const ageAtBirth = 0

function Pet(name) {
    this.name = name;
    this.age = ageAtBirth;
    this.hunger = 0;
    this.fitness = maximumFitness;
  };

Pet.prototype.growUp = function() { 
  this.age ++; 
  this.hunger +=5;
  this.fitness -=3;
};

Pet.prototype.walk = function() {
  if(this.fitness >= 6){
  this.fitness = maximumFitness
  }
  if(this.fitness < 6){
    this.fitness +=4
  }
};

Pet.prototype.feed = function() {
    if(this.hunger < 3){
    this.hunger = 0
  }
  if(this.hunger >= 3){
    this.hunger -=3
  }
};

Pet.prototype.checkUp = function() {
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
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};

module.exports =  {
Pet
}