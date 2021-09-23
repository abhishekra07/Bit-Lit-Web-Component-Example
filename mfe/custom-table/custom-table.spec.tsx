import "./custom-table";
import { fixture } from "@open-wc/testing-helpers";

describe("custom-table", () => {

  beforeEach(async () => {
    await fixture(`<custom-table name="World"></custom-table>`);
  });

  it("has a greeting", async () => {
    const greeting =
      window.document.body.getElementsByTagName("custom-table")[0].shadowRoot
        ?.textContent;
    expect(greeting.indexOf("Hello, World!")).not.toBe(-1);
  });
});
