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
it("should throw when there is one negative number", () => {
    expect(() =>{
        add("-2");
    }).toThrow();
});
it("should throw when there is multiple negative numbers", () => {
    expect(() =>{
        add("-2, -3, -5, -2");
    }).toThrow();
});
it("should throw when there is multiple negative numbers with positive numbers in the mix", () => {
    expect(() =>{
        add("-2, -3,2, -5, -2,5,2");
    }).toThrow();
});
it("should return sum of n given numbers, even with \n and ignoring 1000", () => {
    expect(add("1,2,3,4\n5,6,1000")).toBe(21);
});
it("should return sum of n given numbers, even with \n and ignoring all numbers over 1000", () => {
    expect(add("1,192382,2,1093713,1092,3,4\n5,6,1000")).toBe(21);
});