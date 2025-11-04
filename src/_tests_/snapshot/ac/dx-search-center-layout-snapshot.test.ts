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
import '../../../components/ac/dx-search-center-layout';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-search-center-layout" style="margin: 20px;">
      <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px;">
        <label style="margin: 10px 0;">with Input and Output container</label>
        <dx-search-center-layout>
          <div slot="search-input-container">Test input container</div>
          <div slot="search-output-container">Test output container</div>
        </dx-search-center-layout>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px; width: 600px;">
        <label style="margin:10px 0;">With Tag cloud</label>
        <dx-search-center-layout isTagsAvailable="true">
          <div slot="search-input-container">Test input container</div>
          <div slot="search-output-container">Test output container</div>
          <div slot="tag-cloud">Tag cloud</div>
        </dx-search-center-layout>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px; padding: 10px; width: 600px;">
        <label style="margin:10px 0;">With Dx Header</label>
        <dx-search-center-layout isTagsAvailable="true">
          <div slot="dx-header">Test Header</div>
          <div slot="search-input-container">Test input container</div>
          <div slot="search-output-container">Test output container</div>
          <div slot="tag-cloud">Tag cloud</div>
        </dx-search-center-layout>
      </div>
    </div>
  `;
}

describe('DxSearchCenterLayout - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxSearchCenterLayout - should capture Search Center Layout component - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxSearchCenter = await $('>>>div[data-testid="dx-search-center-layout"]');

    await browser.checkElement(dxSearchCenter, 'dx-search-center-layout-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
