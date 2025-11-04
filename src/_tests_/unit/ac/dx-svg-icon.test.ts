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
import { $, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-svg-icon';

// Helper imports
import { initSessionStorage } from '../../utils';

// Icon imports
import { svgIconEnd } from '../../../static/assets/svg-input-end-icon';

describe('DxSvgIcon component testing', () => {
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

  it('DxSvgIcon - should render without crashing', async () => {
    let component = document.createElement('dx-svg-icon');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('DxSvgIcon - removes component from document body and validates removal', async () => {
    let component = document.createElement('dx-svg-icon');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxSvgIcon - validate default value of attributes', async () => {
    let component = document.createElement('dx-svg-icon');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('color', '');
    await expect(component).toHaveElementProperty('useCurrentColor', false);
    await expect(component).toHaveElementProperty('size', '');
    await expect(component).not.toHaveAttribute('icon');
    component.remove();
  });

  it('DxSvgIcon - should render svg with color and size as passing props if useCurrentColor set to false', async () => {
    render(
      html`
        <dx-svg-icon .icon=${svgIconEnd} color="red" size="16px" ?useCurrentColor=${false}/>
      `,
      document.body
    );
    let component = await $('dx-svg-icon').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', '16px');
    await expect(component).toHaveElementProperty('useCurrentColor', false);
    await expect(component).toHaveElementProperty('color', 'red');
  });

  it('DxSvgIcon - should render svg with parent color if useCurrentColor set to true', async () => {
    render(
      html`
        <dx-svg-icon .icon=${svgIconEnd} size="16px" ?useCurrentColor=${true} style="color: green;"/>
      `,
      document.body
    );
    let component = await $('dx-svg-icon').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', '16px');
    await expect(component).toHaveElementProperty('useCurrentColor', true);
    let svgElement = await component.$('>>>svg').getElement();
    await expect(svgElement).toHaveAttribute('fill', 'currentColor');
    let pathElement = await svgElement.$('>>>path').getElement();
    const color = await pathElement.getCSSProperty('color');
    await expect(color.value).toBe('rgba(0,128,0,1)'); // parent color green
  });
});
