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
import '../../../components/ac/dx-list';

// Helper imports
import { initSessionStorage } from '../../utils';

describe('DxList component testing', () => {
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

  it('DxList - should render without crashing', async () => {
    let component = document.createElement('dx-list');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxList - removes component from document body and validates removal', async () => {
    let component = document.createElement('dx-list');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxList - should validate null for non-existent attributes', async () => {
    let component = document.createElement('dx-list');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('DxList - should render component and validate attributes', async () => {
    render(
      html`
        <dx-list>
          <slot name="test">testing</slot>
        </dx-list>
      `,
      document.body
    );
    let component = await $('dx-list').getElement();
    await expect(component).toBeDisplayed();
    const slot = await $('slot[name="test"]').getElement();
    await expect(slot).toHaveText('testing');
  });
});
