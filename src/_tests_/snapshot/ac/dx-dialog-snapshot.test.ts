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
import '../../../components/ac/dx-dialog';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('generic.label', 'Label');

describe('DxDialog - Snapshot testing', () => {
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

  it('DxDialog - should capture DxDialog component with open attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-open-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with title attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog title="Test title" open .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-title-attribute-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with title and content - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog title="Test title" open .localization=${dxLocalization}>
            <div slot="content">
              <label>Dialog Content</label>
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-title-and-content-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with overrideTitle attribute - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open overrideTitle .localization=${dxLocalization}>
            <div slot="title">
              <label style="color: #0066B0; margin: 5px;">Override Title</label>
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-overrideTitle-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with footer - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open .localization=${dxLocalization}>
            <div slot="footer">
              <dx-authoring-dialog-footer />
            </div>
          </dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-footer-authoring', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with md size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="md" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-md-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with lg size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="lg" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-lg-size', 100);

    document.head.removeChild(link);
  });

  it('DxDialog - should capture DxDialog component with sm size', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div>
          <dx-dialog open size="sm" .localization=${dxLocalization}></dx-dialog>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('dx-dialog-snapshot-baseline-with-sm-size', 100);

    document.head.removeChild(link);
  });
});
