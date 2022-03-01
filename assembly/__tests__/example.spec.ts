import { hello_world } from "..";

describe("first", () => {
  it("Should return 'Hello world'", () => {
    expect(hello_world()).toStrictEqual;
  });
});
