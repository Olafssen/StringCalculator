//CalculatorTest

const add = require("./calculator");

it("should return zero on an emty string", () => {
    expect("").toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});