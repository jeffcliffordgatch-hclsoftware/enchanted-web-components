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
import { customElement, property } from 'lit/decorators.js';
import { html, TemplateResult } from 'lit';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-button';

// Helper imports
import { ICON_BUTTON_SIZES } from '../../types/cssClassEnums';
import { ICON_BUTTON_EXPORT_PARTS } from '../exportParts';

@customElement('dx-icon-button')
export class DxIconButton extends DxAcBaseElement {
  static override shadowRootOptions = {
    ...DxAcBaseElement.shadowRootOptions,
    delegatesFocus: true
  };

  @property({ type: String })
  size: ICON_BUTTON_SIZES = ICON_BUTTON_SIZES.SMALL;

  @property({ type: Boolean })
  withPadding = false;

  @property({ type: String })
  imgurl = '';

  @property()
  icon: TemplateResult | undefined;
  
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean })
  inverseColor = false;

  @property({ type: String })
  ariaLabel: string = '';

  render() {
    return html`
      <dx-button 
        outlined="false"
        data-testid="dx-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${ICON_BUTTON_EXPORT_PARTS}
        .icon=${this.icon}
        ?disabled=${this.disabled}
        ariaLabel=${this.ariaLabel}
      >
      </dx-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-icon-button': DxIconButton;
  }
}
