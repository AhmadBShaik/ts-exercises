import { message } from "../src/hello-world";
test("says Hello, World!", () => {
  expect(message()).toBe('Hello, World!');
});
