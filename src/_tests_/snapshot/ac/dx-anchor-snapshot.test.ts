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
import '../../../components/ac/dx-anchor';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-anchor-layout" style="padding: 5px; width: 250px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>Default</label>
        <dx-anchor url="testURL" weight="0" title="Anchor Title" name="Test" rel="noopener" value="1" mode="pagination"> </dx-anchor>
      </div>
    </div>
  `;
}

describe('DxAnchor - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxAnchor - should capture Anchor component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxAnchor = await $('>>>div[data-testid="dx-anchor-layout"]');
    await browser.checkElement(dxAnchor, 'dx-anchor-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
