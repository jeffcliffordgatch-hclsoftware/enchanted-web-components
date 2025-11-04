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
import '../../../components/ac/dx-svg-icon';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import { svgIconEnd } from '../../../static/assets/svg-input-end-icon';

function renderHtml() {
  return html`
    <div data-testid="dx-svg-icon-layout" style="padding: 5px; width: 250px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With color and size</label>
        <dx-svg-icon .icon=${svgIconEnd} color="red" size="16px" />
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>useCurrentColor prop as false</label>
        <dx-svg-icon .icon=${svgIconEnd} color="red" size="32px" ?useCurrentColor=${false} />
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>useCurrentColor prop as true</label>
        <dx-svg-icon .icon=${svgIconEnd} color="red" size="16px" ?useCurrentColor=${true} />
      </div>
    </div>
  `;
}

describe('DxSvgIcon - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxSvgIcon - should capture SVG Icon component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxSvgIcon = await $('>>>div[data-testid="dx-svg-icon-layout"]');
    await browser.checkElement(dxSvgIcon, 'dx-svg-icon-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
