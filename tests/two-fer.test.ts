import { twoFer } from "../src/two-fer";

describe("print proper names", () => {
  test("Test with name Ahmad", () => {
    expect(twoFer("Ahmad")).toBe("One for Ahmad, one for me.");
  });
  test("Test with name Yaseen", () => {
    expect(twoFer("Yaseen")).toBe("One for Yaseen, one for me.");
  });
  test("Test with name Saif", () => {
    expect(twoFer("Saif")).toBe("One for Saif, one for me.");
  });
  test("Test with name Eswar", () => {
    expect(twoFer("Eswar")).toBe("One for Eswar, one for me.");
  });
  test("Test with no name", () => {
    expect(twoFer()).toBe("One for you, one for me.");
  });
});
