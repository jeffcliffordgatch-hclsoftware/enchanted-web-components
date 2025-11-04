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
import '../../../components/ac/dx-datepicker';
import '../../../components/ac/dx-svg-icon';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

describe('DxDatepicker - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('DxDatepicker - should capture DxDatepicker component with open attribute ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-datepicker open></dx-datepicker>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-datepicker-snapshot-baseline-with-open-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDatepicker - should capture DxDatepicker component with remove label ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-datepicker showRemoveLabel></dx-datepicker>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-datepicker-snapshot-baseline-show-remove-label-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDatepicker - should capture DxDatepicker component closed ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-datepicker></dx-datepicker>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-datepicker-snapshot-baseline-closed-authoring', 100);

    document.head.removeChild(link);
  });
});
