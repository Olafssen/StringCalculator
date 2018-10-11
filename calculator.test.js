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
it("should return sum of 3 given numbers", () => {
    expect(add("1,2,3")).toBe(6);
});
it("should return sum of 4 given numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});
it("should return sum of 5 given numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
});
it("should return sum of 6 given numbers", () => {
    expect(add("1,2,3,4,5,6")).toBe(21);
});
it("should return sum of n given numbers, even with \n", () => {
    expect(add("1,2,3,4\n5,6")).toBe(21);
});