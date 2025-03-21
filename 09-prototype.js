

function Person(name) {   // function constructor 
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.greet = function() {
    return "Hello, my name is " + this.name;
};

let person1 = new Person("Alice");
console.log(person1.greet()); // Output: Hello, my name is Alice

// Modifying the prototype to add a new method
Person.prototype.sayGoodbye = function() {
    return this.name + " says goodbye!";
};

console.log(person1.sayGoodbye()); // Output: Alice says goodbye!

// Modifying an existing method in the prototype
Person.prototype.greet = function() {
    return "Hi! I'm " + this.name;
};

console.log(person1.greet()); // Output: Hi! I'm Alice
