const isPalindrome = require("./index");

test("case 1", () => {
    expect(isPalindrome("hola")).toBe(false);
});

test("case 2", () => {
    expect(isPalindrome("Rotomotor")).toBe(true);
});


test("case 3", () => {
    expect(isPalindrome("Rayar")).toBe(true);
});

test("case 4", () => {
    expect(isPalindrome("Seres")).toBe(true);
});

test("case 5", () => {
    expect(isPalindrome("Soos")).toBe(true);
});

test("case 6", () => {
    expect(isPalindrome("Ana lava lana")).toBe(true);
});

test("case 7", () => {
    expect(isPalindrome("A ti no bonita")).toBe(true);
});

test("case 8", () => {
    expect(isPalindrome("Arriba birra")).toBe(true);
});
