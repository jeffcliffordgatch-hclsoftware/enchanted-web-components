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
import '../../../components/ac/dx-toggle-button';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import tagIconSelected from '../../../static/assets/tag-selected.svg';
import tagIcon from '../../../static/assets/tag.svg';
import listIcon from '../../../static/assets/list.svg';
import listSelectedIcon from '../../../static/assets/list-selected.svg';

function renderHtml() {
  const values = ['cloud-view', 'list-view'];
  return html`
    <div data-testid="dx-toggle-button-layout" style="display: flex; padding: 15px; width: 400px;">
      <div style="flex: 1;">
        <label style="margin-bottom: 5px;">First Button Selected with Outlined - false</label>
        <dx-toggle-button .iconUrls=${[tagIconSelected, listIcon]} .values=${values} selectedValue=${values[0]} ?outlined=${true}>
        </dx-toggle-button>
      </div>

      <div style="flex: 1;">
        <label style="margin-bottom: 5px;">Second Button Selected with Outlined - true</label>
        <dx-toggle-button .iconUrls=${[tagIcon, listSelectedIcon]} .values=${values} selectedValue=${values[1]} ?outlined=${true}>
        </dx-toggle-button>
      </div>

      <div style="flex: 1;">
        <label style="margin-bottom: 5px;">Button Selected with disabled</label>
        <dx-toggle-button
          ?disabled=${true}
          .iconUrls=${[tagIcon, listSelectedIcon]}
          .values=${values}
          selectedValue=${values[1]}
          ?outlined=${true}
        >
        </dx-toggle-button>
      </div>
    </div>
  `;
}

describe('DxToggleButton - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxToggleButton - should capture Toggle Button component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    let dxToggleButton = await $('>>>div[data-testid="dx-toggle-button-layout"]');

    await browser.checkElement(dxToggleButton, 'dx-toggle-button-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
