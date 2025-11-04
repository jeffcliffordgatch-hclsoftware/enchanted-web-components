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
import { browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-avatar';
import '../../../components/ac/dx-item-type-avatar';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { ICON_ITEM_TYPE } from '../../../types/dx-svg-icon';

function renderHtml() {
  return html`
    <div data-testid="dx-authoring-type-avatar-item-layout" style="padding: 15px 10px; width: 400px; height: 400px;">
      ${Object.values(ICON_ITEM_TYPE).map((icon) => {
        return html`<div style="display: flex;">
          <div>
            <dx-item-type-avatar itemType=${icon} />
          </div>
          <div style="margin-left: 5px;">
            <label>${icon}</label>
          </div>
        </div>`;
      })}
    </div>
  `;
}

describe('DxAuthoringItemTypeAvatar - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('DxAuthoringItemTypeAvatar - should capture Dx Authoring Type Avatar component with different icons - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-item-type-avatar-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });
});
