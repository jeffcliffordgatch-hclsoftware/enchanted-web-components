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
import '../../../components/ac/dx-header-layout';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-header-layout" style="padding: 5px; width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <dx-header-layout>
          <div slot="header-start">Start</div>
          <div slot="header-middle">Middle</div>
          <div slot="header-end">End</div>
        </dx-header-layout>
      </div>
    </div>
  `;
}

describe('DxHeaderLayout - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxHeaderLayout - should capture Header Layout component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    let dxHeaderLayout = await $('>>>div[data-testid="dx-header-layout"]');
    await browser.checkElement(dxHeaderLayout, 'dx-header-layout-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
