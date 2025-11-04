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
import '../../../components/ac/dx-list';
import '../../../components/ac/dx-list-item';

// Helper imports
import { LIST_PARTS } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-list-layout" style="padding: 5px 0; width: 250px;">
      <dx-list role="menu" exportparts="${Object.values(LIST_PARTS).join(',')}">
        <dx-list-item>item 1</dx-list-item>
        <dx-list-item>item 2</dx-list-item>
      </dx-list>
    </div>
  `;
}

describe('DxList - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxList - should capture List component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxListLayout = await $('>>>div[data-testid="dx-list-layout"]');
    await browser.checkElement(dxListLayout, 'dx-list-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
