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
import '../../../components/ac/dx-alert';

// Helpers imports
import { ALERT_SEVERITY, ALERT_VARIANTS } from '../../../types/cssClassEnums';

describe('DxAlert component testing', () => {
  before(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('DxAlert - should render without crashing', async () => {
    let component = document.createElement('dx-alert');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxAlert - should render severity="info" variant="contained"', async () => {
    render(
      html`
        <dx-alert message="contained-info" severity="info" variant="contained"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_INFO);
    await expect(component).toHaveAttribute('message', 'contained-info');
  });

  it('DxAlert - should render severity="info" variant="outlined"', async () => {
    render(
      html`
        <dx-alert message="outlined-info" severity="info" variant="outlined"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_INFO);
    await expect(component).toHaveAttribute('message', 'outlined-info');
  });

  it('DxAlert - should render severity="warning" variant="contained"', async () => {
    render(
      html`
        <dx-alert message="contained-warning" severity="warning" variant="contained"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_WARNING);
    await expect(component).toHaveAttribute('message', 'contained-warning');
  });

  it('DxAlert - should render severity="warning" variant="outlined"', async () => {
    render(
      html`
        <dx-alert message="outlined-warning" severity="warning" variant="outlined"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_WARNING);
    await expect(component).toHaveAttribute('message', 'outlined-warning');
  });

  it('DxAlert - should render severity="success" variant="contained"', async () => {
    render(
      html`
        <dx-alert message="contained-success" severity="success" variant="contained"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_SUCCESS);
    await expect(component).toHaveAttribute('message', 'contained-success');
  });

  it('DxAlert - should render severity="success" variant="outlined"', async () => {
    render(
      html`
        <dx-alert message="outlined-success" severity="success" variant="outlined"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_SUCCESS);
    await expect(component).toHaveAttribute('message', 'outlined-success');
  });
  
  it('DxAlert - should render severity="error" variant="contained"', async () => {
    render(
      html`
        <dx-alert message="contained-error" severity="error" variant="contained"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_CONTAINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_ERROR);
    await expect(component).toHaveAttribute('message', 'contained-error');
  });

  it('DxAlert - should render severity="error" variant="outlined"', async () => {
    render(
      html`
        <dx-alert message="outlined-error" severity="error" variant="outlined"></dx-alert>
      `,
      document.body
    );
    let component = await $('dx-alert').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('variant', ALERT_VARIANTS.ALERT_OUTLINED);
    await expect(component).toHaveAttribute('severity', ALERT_SEVERITY.ALERT_ERROR);
    await expect(component).toHaveAttribute('message', 'outlined-error');
  });

});
