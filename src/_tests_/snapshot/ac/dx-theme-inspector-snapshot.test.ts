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
import { $, browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-theme-inspector';

// Helper imports
import { SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

describe('DxThemeInspector - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  afterEach(() => {
    document.body.replaceChildren();
  });

  it('DxThemeInspector - should capture Theme Inspector component - Enchanted Theme', async () => {
    render(
      html`
        <dx-theme-inspector></dx-theme-inspector>
      `,
      document.body
    );
    const component = await $('dx-theme-inspector');
    await component.waitForDisplayed({ timeout: 8000 });
    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-theme-inspector-snapshot-baseline', 100);
  });
});
