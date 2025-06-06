let sales = 123_456_789; // Using underscores for readability
let course = "TypeScript Basics";
let isPublished = true;
let level; // Using 'any' type for flexibility but not recommended for strict typing and should be avoided if possible
let numbers = [1, 2, 3, 4, '5']; // Array of numbers and a string which is a valid typscript array but not type-safe
let numbers2: number[] = [1, 2, 3, 4]; // Array of numbers with strict typing by using annotation "number[]"
numbers.forEach(n => n.valueOf()); // Using forEach to iterate over the array and call valueOf on each element
const doubled: number[] = numbers2.map((n:number) => n * 2); // Using map to create a new array with each element multiplied by 2

//Tuples
let user: [number, string, boolean] = [1, "John", true]; // Tuple with strict types for each element

// Enum
//instead of:
//const small = 1;
//const medium = 2;
//const large = 3;
const enum Size{Small = 1, Medium, Large}
let mySize: Size = Size.Medium; // Using enum for better readability and maintainability
console.log(mySize); // Output: 2

//Objects
let employee: { //It is equivalent to defining a structure in C or C#
    id: number;
    name: string;
    isActive: boolean;
} = {
    id: 1,
    name: "John",
    isActive: true
};
console.log(employee); // Output: { id: 1, name: 'John', isActive: true }
employee.name = "Jane"; // Changing the name property of the employee object
// The method above is messy and is sometimes hard to read. 

//Type Aliases can be used to make it more readable and maintainable:
type Employee = {
    id: number;
    name: string;
    isActive: boolean;
};
let employees: Employee[] = [
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
function kgToLbs(kg: number | string): number {
    //This is the concept of Narrowing:
    if(typeof kg === 'number'){
        return kg * 2.20462; // Convert kg to lbs
    } else {
        return parseFloat(kg) * 2.20462; // Convert string to number and then to lbs
    }
}
kgToLbs(10); // Calling the function with a number
kgToLbs("10"); // Calling the function with a string

//Intersection Types
type Draggable = {
    drag: () => void;
};
type Resizable = {
    resize: () => void;
};
type UIWidget = Draggable & Resizable; // Combining two types into one
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types
type Quantity = 50 | 100 | 150; // Literal type for specific values
let quantity: Quantity = 100; // Valid assignment
// quantity = 200; // Invalid assignment, will cause a TypeScript error
type Metric = "cm" | "m" | "km"; // Literal type for specific string values
let metric: Metric = "m"; // Valid assignment
// metric = "in"; // Invalid assignment, will cause a TypeScript error