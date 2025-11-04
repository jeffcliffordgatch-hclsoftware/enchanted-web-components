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
import '../../../components/ac/dx-switch';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div
      data-testid="dx-switch-layout"
      style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        width: 300px;
        justify-content: center;
      "
    >
      <div>
        <label>Default</label>
        <dx-switch></dx-switch>
      </div>
      <div style="display: flex; justify-content: center;">
        <div>
          <label>Checked</label>
          <dx-switch ?isChecked=${true}></dx-switch>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <div>
          <label>Disabled</label>
          <dx-switch ?isDisabled=${true}></dx-switch>
        </div>
      </div>
    </div>
  `;
}

describe('DxSwitch - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxSwitch - should capture Switch component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let dxSwitchLayout = await $('>>>div[data-testid="dx-switch-layout"]');
    await browser.checkElement(dxSwitchLayout, 'dx-switch-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
