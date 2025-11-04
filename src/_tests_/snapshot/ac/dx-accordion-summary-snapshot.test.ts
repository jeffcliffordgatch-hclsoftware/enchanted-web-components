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
import { $, browser } from "@wdio/globals";

// Component import
import "../../../components/ac/dx-accordion-summary";

// Helper imports
import {
  appendEnchantedStylingLink,
  SNAPSHOT_WINDOW_HEIGHT,
  SNAPSHOT_WINDOW_WIDTH,
} from "../utils";
import { renderComponent } from "../../utils";

const dxLocalization: Map<string, string> = new Map<string, string>();

dxLocalization.set("accordion.summary.label.text", "Summary Label Text");
dxLocalization.set("accordion.summary.secondary.text", "Summary Secondary Text");

describe("DxAccordion-Summary - Snapshot testing", () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });
  let link: HTMLLinkElement;
  beforeEach(() => {
    link = appendEnchantedStylingLink();
  });
  afterEach(() => {
    document.head.removeChild(link);
  });
  it("DxAccordion-summary - should render with label and secondary text enabled", async () => {
    renderComponent(
      html`
        <div
          data-testid="dx-accordion-summary"
          style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 400px;"
        >
          <div style="flex: 1;">
            <label style="margin-bottom: 5px;">label and secondary text</label>
            <dx-accordion-summary
              .localization=${dxLocalization}
              label="snapshot label"
              secondaryText="snapshot secondary text"
            ></dx-accordion-summary>
          </div>
        </div>
      `
    );
    let label = await $('>>>div[data-testid="dx-accordion-summary"]');
    await browser.checkElement(
      label,
      "dx-accordion-summary-snapshot-baseline-label-and-secondaryText"
    );
  });
  it("DxAccordion-summary - should render with Localization", async () => {
    renderComponent(
      html`
        <div
          data-testid="dx-accordion-summary"
          style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 400px;"
        >
          <div style="flex: 1;">
            <label style="margin-bottom: 5px;">label and secondary text</label>
            <dx-accordion-summary
              .localization=${dxLocalization}
            ></dx-accordion-summary>
          </div>
        </div>
      `
    );
    let label = await $('>>>div[data-testid="dx-accordion-summary"]');
    await browser.checkElement(
      label,
      "dx-accordion-summary-snapshot-baseline-Localization"
    );
  });
});
