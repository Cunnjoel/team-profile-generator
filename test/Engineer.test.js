const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");
test("Can set github username via constructor argument", () => {
  const testValue = "github.com/foo";
  const e = new Engineer("Foo", 2, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});
test("getRole() should return \"Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 2, "test@test.com", "github.com/foo");
  expect(e.getRole()).toBe(testValue);
});
test("Can get github username via getGithub()", () => {
  const testValue = "github.com/foo";
  const e = new Engineer("Foo", 2, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});