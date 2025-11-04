/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */
// External imports
import { html } from "lit";
import { expect, $ } from "@wdio/globals";

// Helper import
import { renderComponent } from "../../utils";

// Component import
import "../../../components/ac/dx-accordion-summary";
function renderSummaryTemplate({
  label = "",
  secondaryText = "",
}: {
  label?: string;
  secondaryText?: string;
} = {}) {
  renderComponent(html`
    <dx-accordion-summary label=${label} secondaryText=${secondaryText}>
    </dx-accordion-summary>
  `);
}
describe("<dx-accordion-summary> render", () => {
  it("should render part='label' with correct text", async () => {
    renderSummaryTemplate({ label: "Test Label" });
    const summary = await $("dx-accordion-summary");
    const labelPart = await summary.shadow$('[part="label"]');
    const labelText = await labelPart.getText();
    expect(labelText).toBe("Test Label");
  });
  it("should render part='secondary' with correct text", async () => {
    renderSummaryTemplate({ secondaryText: "Test Secondary Text" });
    const summary = await $("dx-accordion-summary");
    const secondaryTextPart = await summary.shadow$('[part="summary"]');
    expect(secondaryTextPart).not.toBeNull();
    const secondaryText = await secondaryTextPart.getText();
    expect(secondaryText).toBe("Test Secondary Text");
  });
  it("should  render secondary text part when not provided", async () => {
    renderSummaryTemplate({ label: "Test Label" });
    const summary = await $("dx-accordion-summary");
    const secondaryTextPart = await summary.shadow$('[part="secondary"]');
    if (secondaryTextPart === null) {
      expect(secondaryTextPart).toBeNull();
    } else {
      const exists = await secondaryTextPart.isExisting();
      expect(exists).toBe(true);
    }
  });
});
