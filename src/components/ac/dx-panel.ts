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
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-button';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, PANEL_PARTS, PANEL_POSITION } from '../../types/cssClassEnums';

// Icon imports
import svgIconClose from '../../static/assets/close.svg';

@customElement('dx-panel')
export class DxPanel extends DxAcBaseElement {

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) position: PANEL_POSITION = PANEL_POSITION.PANEL_LEFT;
  @property({ type: String }) headerTitle = '';
  @property({ type: String }) ariaLabel = '';
  @property({ type: Boolean }) focusPanel = false;

  // Public methods to control the panel to show/hide
  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  private _handleCloseClick() {
    this.hide();
    this.dispatchEvent(new CustomEvent('dxPanelClose'));
  }

  render() {
    return html`
      <div
        part=${PANEL_PARTS.PANEL_CONTAINER}
        role="dialog"
        aria-modal="true"
        aria-label=${this.ariaLabel}
        aria-hidden=${!this.open}
        tabindex="${this.focusPanel ? '0' : '-1'}"
      >
        <div part=${PANEL_PARTS.PANEL_HEADER}>
          <div part=${PANEL_PARTS.PANEL_TITLE}>
            <span>${this.headerTitle}</span>
          </div>
          <div>
            <slot name="center-title-content"></slot>
          </div>
          <dx-button
            part=${PANEL_PARTS.PANEL_CLOSE_BUTTON}
            exportparts="${Object.values(BUTTON_PARTS).join(",")}"
            buttontext=""
            ?outlined="${false}"
            imgurl="${svgIconClose}"
            @click=${this._handleCloseClick}
            variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
          >
          </dx-button>
        </div>
        <div part=${PANEL_PARTS.PANEL_CONTENT} tabindex="-1">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-panel': DxPanel;
  }
}
