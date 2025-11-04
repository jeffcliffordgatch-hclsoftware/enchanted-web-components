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
import '../../../components/ac/dx-header-layout';

// Helper imports
import { initSessionStorage } from '../../utils';
import { HEADER_LAYOUT_PARTS } from '../../../types/cssClassEnums';
 
describe('DxHeaderLayout component testing', () => {
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

  it('DxHeaderLayout - should render without crashing', async () => {
    let component = document.createElement('dx-header-layout');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxHeaderLayout - removes component from document body and validates removal', async () => {
    let component = document.createElement('dx-header-layout');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxHeaderLayout - should validate null for non-existent attributes', async () => {
    let component = document.createElement('dx-header-layout');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('DxHeaderLayout - should render component and validate attributes', async () => {
    render(
      html`
        <dx-header-layout>
          <div slot="header-start">testing1</div>
          <div slot="header-middle">testing2</div>
          <div slot="header-end">testing3</div>
        </dx-header-layout>
      `,
      document.body
    );
    let component = await $('dx-header-layout').getElement();
    await expect(component).toBeDisplayed();
    const slot1 = await $('div[slot="header-start"]').getElement();
    await expect(slot1).toHaveText('testing1');

    const slot2 = await $('div[slot="header-middle"]').getElement();
    await expect(slot2).toHaveText('testing2');

    const slot3 = await $('div[slot="header-end"]').getElement();
    await expect(slot3).toHaveText('testing3');
  });

  it('DxHeaderLayout - should render component in chat header mode', async () => {
    render(
      html`
        <dx-header-layout ?isChatHeader=${true}>
        </dx-header-layout>
      `,
      document.body
    );
    let component = await $(`>>>[part="${HEADER_LAYOUT_PARTS.CHAT_MAIN_HEADER}"]`).getElement();
    await expect(component).toBeDisplayed();
  });
});
