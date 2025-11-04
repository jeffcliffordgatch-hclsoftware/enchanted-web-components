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
import { LIST_ITEM_PARTS } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-list-item-layout" style="padding: 5px; width: 250px;">
      <div>
        <label>Default</label>
        <dx-list>
          ${[1, 2, 3].map((item) => {
            return html`<dx-list-item exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}">Item ${item}</dx-list-item>`;
          })}
        </dx-list>
      </div>

      <div>
        <label>With role</label>
        <dx-list>
          ${[1, 2, 3].map((item) => {
            return html`<dx-list-item role="menuitem" exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
              >Item ${item}</dx-list-item
            >`;
          })}
        </dx-list>
      </div>
    </div>
  `;
}

describe('DxListItem - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxListItem - should capture List item component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxListItemLayout = await $('>>>div[data-testid="dx-list-item-layout"]');
    await browser.checkElement(dxListItemLayout, 'dx-list-item-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
