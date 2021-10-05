import "./featured-info";
import { fixture } from "@open-wc/testing-helpers";

describe("featured-info", () => {

  beforeEach(async () => {
    await fixture(`<featured-info name="World"></featured-info>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("featured-info")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
