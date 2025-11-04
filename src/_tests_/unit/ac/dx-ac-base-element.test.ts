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
import { customElement } from 'lit/decorators.js';
import { $, expect } from '@wdio/globals';
import { v4 as uuid } from 'uuid';

// Component imports
import { DxAcBaseElement } from '../../../components/ac/dx-ac-base-element';

@customElement('dx-ac-base-element-test-component')
export class DxAcBaseSample extends DxAcBaseElement {
  render() {
    return html`
       <slot></slot>
     `;
  }
}

describe('AC base component testing', () => {
  let elem: HTMLElement;

  beforeEach(() => {
    elem = document.createElement('dx-fcc-base-element-test-component');
  });

  it('DxAcBaseSample - should render component and validate id attribute', async () => {
    const id = uuid();
    render(
      html`
         <dx-ac-base-element-test-component id=${id}/>
       `,
      document.body
    );
    let component = await $('dx-ac-base-element-test-component').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('id', id);
  });

  afterEach(() => {
    elem.remove();
  });
});
