function calc(a: number, b: number) { //Function with a void  return type
    console.log(a + b);
}

function calculateTax(income: number): number{
    return income * 0.2; // Assuming a flat tax rate of 20%
}

function yearBasedTax(income: number, year = 2022): number {
    if(year < 2022) {
        return income * 0.15; // Assuming a lower tax rate for years before 2022
    }
    return income * 0.2; // Default tax rate
}

yearBasedTax(50000); // Calling the function with a default year
yearBasedTax(50000, 2021); // Calling the function with a specific year

//Optional Chaining
type Customer = {
    birthday: Date;
}
function getCustomerBirthDate(id: number): Customer | null | undefined {
    return id === 0? null : { birthday: new Date() }; // Returning a Customer object or null if id is 0
}

let customer = getCustomerBirthDate(0);
let customer2 = getCustomerBirthDate(1);
// Optional Property Access Operator (?.) allows safe access to properties of an object that might be null or undefined:
console.log(customer?.birthday); // Output: null
console.log(customer2?.birthday); // Output: current date
// Optional Method Call Operator (?.()) allows safe invocation of methods that might not exist:
let log: any = null;
log?.("This will not throw an error if log is null or undefined"); // No error, does nothing

