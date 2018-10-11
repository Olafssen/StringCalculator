//CalculatorTest

const add = require("./calculator");

it("should return zero on an emty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});
it("should return sum of two given numbers", () => {
    expect(add("1,2")).toBe(3);
});
it("should return sum of n given numbers", () => {
    expect(add("1,2,3,4,5,6")).toBe(21);
});

