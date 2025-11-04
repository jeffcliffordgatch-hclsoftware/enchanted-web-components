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
import { localized } from '@lit/localize';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-list-item';

// Helper imports
import { LIST_ITEM_PARTS, MENU_ITEM_PARTS } from '../../types/cssClassEnums';

@customElement('dx-menu-item')
@localized()
export class DxMenuItem extends DxAcBaseElement {
  @property({ type: String })
  text = '';

  @property({ type: String })
  value = '';

  @property({ type: Object })
  menuObject = {};

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  handleMenuItemClick(evt: MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.dispatchEvent(new CustomEvent('menuItemClick', {
      bubbles: true, composed: true, detail: { text: this.text, value: this.value, menuObject: this.menuObject },
    }));
  }

  handleMenuItemEnter(evt: KeyboardEvent) {
    if (evt.key === 'Enter') {
      this.dispatchEvent(new CustomEvent('menuItemClick', {
        bubbles: true, composed: true, detail: { text: this.text, value: this.value, menuObject: this.menuObject },
      }));
    }
  }

  handleMenuItemTooltip(e: MouseEvent) {
    const textRoot = e.currentTarget as HTMLTableCellElement;
    if (textRoot.offsetWidth < textRoot.scrollWidth ) {
      textRoot.setAttribute('title', this.text || '');
    }
  }
  
  render() {
    return html`
      <dx-list-item
        role="menuitem"
        cascading="0"
        exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${(evt: MouseEvent) => {return this.handleMenuItemTooltip(evt);}} part=${MENU_ITEM_PARTS.TEXT_ROOT}>
          <span part=${MENU_ITEM_PARTS.TEXT}>${this.text}</span>
        </div>
      </dx-list-item>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'dx-menu-item': DxMenuItem
  }
}
