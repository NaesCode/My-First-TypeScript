var sales = 123456789; // Using underscores for readability
var course = "TypeScript Basics";
var isPublished = true;
var level; // Using 'any' type for flexibility but not recommended for strict typing and should be avoided if possible
var numbers = [1, 2, 3, 4, '5']; // Array of numbers and a string which is a valid typscript array but not type-safe
var numbers2 = [1, 2, 3, 4]; // Array of numbers with strict typing by using annotation "number[]"
numbers.forEach(function (n) { return n.valueOf(); }); // Using forEach to iterate over the array and call valueOf on each element
//Tuples
var user = [1, "John", true]; // Tuple with strict types for each element
var mySize = 2 /* Size.Medium */; // Using enum for better readability and maintainability
console.log(mySize); // Output: 2
//Objects
var employee = {
    id: 1,
    name: "John",
    isActive: true
};
console.log(employee); // Output: { id: 1, name: 'John', isActive: true }
employee.name = "Jane"; // Changing the name property of the employee object
var employees = [
    {
        id: 1,
        name: "John",
        isActive: true
    },
    {
        id: 2,
        name: "Jane",
        isActive: false
    }
];
employees[0].name = "Johnny"; // Changing the name property of the first employee object
console.log(employees[0]); // Output: { id: 1, name: 'Johnny', isActive: true }
//Union Types
function kgToLbs(kg) {
    //This is the concept of Narrowing:
    if (typeof kg === 'number') {
        return kg * 2.20462; // Convert kg to lbs
    }
    else {
        return parseFloat(kg) * 2.20462; // Convert string to number and then to lbs
    }
}
kgToLbs(10); // Calling the function with a number
kgToLbs("10"); // Calling the function with a string
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 100; // Valid assignment
var metric = "m"; // Valid assignment
// metric = "in"; // Invalid assignment, will cause a TypeScript error
