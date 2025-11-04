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
import '../../../components/ac/dx-badge';

// Helper imports
import { HEADER_PARTS } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="dx-badge-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 100px; height: 70px;">
      <label style="font-size: 14px;">Default</label>
      <div>
        <dx-badge badge="20" />
      </div>

      <label style="font-size: 14px;">Dot</label>
      <div>
        <dx-badge part=${HEADER_PARTS.BADGE_DOT} />
      </div>
    </div>
  `;
}

describe('DxBadge - Snapshot testing', () => {

  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxBadge - should capture Badge component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxBadge = await $('>>>div[data-testid="dx-badge-layout"]');
    document.getElementsByTagName('dx-badge')[0].setAttribute('style', 'position: relative; left: 20px;');
    document.getElementsByTagName('dx-badge')[1].setAttribute('style', 'position: relative; left: 20px;');

    await browser.checkElement(dxBadge, 'dx-badge-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
