"use strict";
function calc(a, b) {
    console.log(a + b);
}
function calculateTax(income) {
    return income * 0.2; // Assuming a flat tax rate of 20%
}
function yearBasedTax(income, year = 2022) {
    if (year < 2022) {
        return income * 0.15; // Assuming a lower tax rate for years before 2022
    }
    return income * 0.2; // Default tax rate
}
yearBasedTax(50000); // Calling the function with a default year
yearBasedTax(50000, 2021); // Calling the function with a specific year
function getCustomerBirthDate(id) {
    return id === 0 ? null : { birthday: new Date() }; // Returning a Customer object or null if id is 0
}
let customer = getCustomerBirthDate(0);
let customer2 = getCustomerBirthDate(1);
// Optional Property Access Operator (?.) allows safe access to properties of an object that might be null or undefined:
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday); // Output: null
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday); // Output: current date
// Optional Method Call Operator (?.()) allows safe invocation of methods that might not exist:
let log = null;
log === null || log === void 0 ? void 0 : log("This will not throw an error if log is null or undefined"); // No error, does nothing
//# sourceMappingURL=functions.js.map