import "./notification-bar";
import { fixture } from "@open-wc/testing-helpers";

describe("notification-bar", () => {

  beforeEach(async () => {
    await fixture(`<notification-bar name="World"></notification-bar>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("notification-bar")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
