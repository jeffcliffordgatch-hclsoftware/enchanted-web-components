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
import { $, browser } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-panel';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

describe('DxPanel snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  const panelContent = html`
    <div style="color: #000000;">
      <h2>Sample content</h2>
      <p>This is a sample text.</p>
    </div>
  `;

  it('DxPanel - left - should capture DxPanel component with title and content - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="dx-panel-layout" style="position: relative; width: 600px; height: 1600px;">
          <dx-panel
            position="left"
            title="Sample Content"
            open
          >
            <div slot="content">
              ${panelContent}
            </div>
          </dx-panel>
        </div>
      `,
      document.body
    );

    const dxPanelLayout = await $('>>>div[data-testid="dx-panel-layout"]');
    await browser.checkElement(dxPanelLayout, 'dx-panel-snapshot-left-baseline-with-title-and-content-authoring');

    document.head.removeChild(link);
  });

  it('DxPanel - right - should capture DxPanel component with title and content - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="dx-panel-layout" style="position: relative; width: 600px; height: 1600px;">
          <dx-panel
            position="right"
            title="Sample Content"
            open
          >
            <div slot="content">
              ${panelContent}
            </div>
          </dx-panel>
        </div>
      `,
      document.body
    );

    const dxPanelLayout = await $('>>>div[data-testid="dx-panel-layout"]');
    await browser.checkElement(dxPanelLayout, 'dx-panel-snapshot-right-baseline-with-title-and-content-authoring');

    document.head.removeChild(link);
  });

  it('DxPanel - left - should capture DxPanel component with title only - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="dx-panel-layout" style="position: relative; width: 600px; height: 1600px;">
          <dx-panel
            position="left"
            title="Sample Content"
            open
          >
          </dx-panel>
        </div>
      `,
      document.body
    );

    const dxPanelLayout = await $('>>>div[data-testid="dx-panel-layout"]');
    await browser.checkElement(dxPanelLayout, 'dx-panel-snapshot-left-baseline-with-title-only-authoring');

    document.head.removeChild(link);
  });

  it('DxPanel - right - should capture DxPanel component with title only - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="dx-panel-layout" style="position: relative; width: 600px; height: 1600px;">
          <dx-panel
            position="right"
            title="Sample Content"
            open
          >
          </dx-panel>
        </div>
      `,
      document.body
    );

    const dxPanelLayout = await $('>>>div[data-testid="dx-panel-layout"]');
    await browser.checkElement(dxPanelLayout, 'dx-panel-snapshot-right-baseline-with-title-only-authoring');

    document.head.removeChild(link);
  });
});
