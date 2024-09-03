// // call

// function greet(firstName, seconName) {
//     console.log(`Hello, ${firstName} ${seconName}! My name is ${this.name}.`);
//   }
  
//   let person = {
//     name: "John"
//   };
  
//   greet.call(person, "Alice", "Babu"); // Output: Hello, Alice Babu! My name is John.

// //  call

// function greet(firstName, seconName) {
//     console.log(`Hello, ${firstName} ${seconName}! My name is ${this.name}.`);
//   }
  
//   let person = {
//     name: "John"
//   };
  
//   greet.apply(person, ["Alice", "Babu"]); // Output: Hello, Alice Babu! My name is John.

// bind

function greet(firstName, seconName) {
    console.log(`Hello, ${firstName} ${seconName}! My name is ${this.name}.`);
  }
  
  let person = {
    name: "John"
  };
  
  const result = greet.bind(person, "Alice", "Babu"); 
  result();// Output: Hello, Alice Babu! My name is John.