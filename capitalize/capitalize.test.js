const capitalize = require("./capitalize");

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});
