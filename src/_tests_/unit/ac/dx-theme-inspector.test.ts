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
import { html, render } from 'lit';
import { $, expect } from '@wdio/globals';

// Component imports
import '../../../components/ac/dx-theme-inspector';

// Helper imports
import { initSessionStorage } from '../../utils';

describe('DxThemeInspector component testing', () => {
  before(async () => {
    await initSessionStorage();
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('DxThemeInspector - should render without crashing', async () => {
    let component = document.createElement('dx-theme-inspector');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxThemeInspector - removes component from document body and validates removal', async () => {
    let component = document.createElement('DxThemeInspector');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxThemeInspector - should render theme inspector', async () => {
    render(
      html`
        <dx-theme-inspector />
      `,
      document.body
    );
    const component = await $('dx-theme-inspector');
    const container = await component.$('>>>div[data-testid="dx-theme-inspector-container"]');
    await container.waitForDisplayed({ timeout: 8000 });
    await expect(container).toBeDisplayed();
  });
});
