/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2024. All Rights Reserved.       *
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
import '../../../components/ac/dx-badge';

// Helper imports
import { initSessionStorage } from '../../utils';

describe('DxBadge component testing', () => {
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

  it('DxBadge - should render without crashing', async () => {
    let component = document.createElement('dx-badge');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxBadge - removes component from document body and validates removal', async () => {
    let component = document.createElement('DxBadge');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxBadge - should render default badge ●', async () => {
    render(
      html`
        <dx-badge />
      `,
      document.body
    );
    let component = await $('dx-badge').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('●');
  });

  it('DxBadge - should render property badge', async () => {
    render(
      html`
        <dx-badge badge="20" />
      `,
      document.body
    );
    let component = await $('dx-badge').getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveText('20');
  });
});
