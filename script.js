//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	makeSound(){
		console.log("animal sound");
	}
	get species(){
		this.species = species
	}
}

class Dog extends Animal {
	constructor(){
		super(species);
	}
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(){
		super(species)
	}
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
