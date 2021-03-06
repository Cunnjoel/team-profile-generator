const Intern = require("../lib/intern");
const Employee = require("../lib/employee");
test("Can set school via constructor argument", () => {
  const testValue = "smu";
  const e = new Intern("Foo", 2, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 2, "test@test.com", "github.com/foo");
  expect(e.getRole()).toBe(testValue);
});
test("Can get school via getSchool()", () => {
  const testValue = "smu";
  const e = new Intern("Foo", 2, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});