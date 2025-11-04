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
/**
 * @customElement
 * @class DxSvgIcon
 * @extends {DxAcBaseElement}
 * 
 * @description
 * The `DxSvgIcon` class is a custom web component that extends the `DxAcBaseElement`.
 * It is used to render an SVG icon with customizable properties such as `icon`, `color`, `size`, and `useCurrentColor`.
 * 
 * @property {TemplateResult} icon - The SVG icon template to be rendered.
 * @property {string} color - The color of the SVG icon. If `useCurrentColor` is true, the icon will inherit the color from its parent component.
 * @property {string} size - The size of the SVG icon. This sets both the width and height of the icon.
 * @property {boolean} useCurrentColor - A flag indicating whether the icon should inherit the color from its parent component.
 * 
 * @constructor
 * Initializes the `DxSvgIcon` component.
 * 
 * @method updated
 * @param {Map<string, unknown>} changedProperties - A map of changed properties.
 * Updates the SVG icon's color and size based on the changed properties if `useCurrentColor` is false.
 * 
 * @method render
 * @returns {TemplateResult} The template result containing the SVG icon wrapped in a div.
 * 
 * @example
 * <dx-svg-icon icon="${myIcon}" color="red" size="24px" useCurrentColor></dx-svg-icon>
 */

// External imports
import { html, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';

@customElement('dx-svg-icon')
export class DxSvgIcon extends DxAcBaseElement {

  @property({ type: String }) icon?: TemplateResult;
  @property({ type: String }) color: string = '';
  @property({ type: String }) size: string = '';
  @property({ type: Boolean }) useCurrentColor: boolean = false;

  constructor() {
    super();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (!this.useCurrentColor) {
      const svg = this.renderRoot?.querySelector('svg');
      if (changedProperties.has('color')) {
        svg ? svg.style.fill = this.color : nothing;
      }
      if (changedProperties.has('size')) {
        svg ? svg.style.width = this.size : nothing;
        svg ? svg.style.height = this.size : nothing;
      }
    }
  }

  render() {
    return html`
    <!-- If we set any style to <div> and useCurrentColor = true, icon will take color from the div (parent) component -->
      ${this.icon}
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'dx-svg-icon': DxSvgIcon
  }
}
