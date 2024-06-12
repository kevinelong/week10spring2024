// >>> write a class for a counter in javascript
// Here's an example of a simple Counter class in JavaScript:
// ```
class Counter {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  getValue() {
    return this.value;
  }
}
// ```
// Here's a breakdown of the class:

// * The `constructor` method initializes the counter with an optional initial value (default is 0).
// * The `increment` and `decrement` methods update the counter value by incrementing or decrementing it, respectively.
// * The `getValue` method returns the current value of the counter.

// You can use this class like so:
// ```
const counter = new Counter(5); // create a counter with initial value 5

console.log(counter.getValue()); // output: 5

counter.increment(); // increment the counter
console.log(counter.getValue()); // output: 6

counter.decrement(); // decrement the counter
console.log(counter.getValue()); // output: 5
// ```
// Of course, this is a very basic implementation, and you could add more features to your Counter class (e.g., handling overflow,
// allowing for multiple simultaneous increments/decrements, etc.).