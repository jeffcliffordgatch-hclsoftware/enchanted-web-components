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
import '../../../components/ac/dx-chip';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 300px;">
      <div style="display: flex; flex-direction: column;">
        <label>With name</label>
        <dx-chip name="tag cloud"></dx-chip>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label>With name and count</label>
        <dx-chip name="tag cloud" count="10"></dx-chip>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label>With name, count and showChipCount</label>
        <dx-chip name="tag cloud" count="10" showChipCount></dx-chip>
      </div>
    </div>
  `;
}

describe('DxChip - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxChip - should capture Chip component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxSwitchLayout = await $('>>>div[data-testid="dx-chip-layout"]');
    await browser.checkElement(dxSwitchLayout, 'dx-chip-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
