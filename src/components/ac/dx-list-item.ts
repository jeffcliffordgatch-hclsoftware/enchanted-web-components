/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2024, 2025. All Rights Reserved. *
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

// Icon imports
import { LIST_ITEM_PARTS } from '../../types/cssClassEnums';

/**
 * List item component.
 */
@customElement('dx-list-item')
export class DxListItem extends DxAcBaseElement {
  @property({ type: String })
  key = '';

  @property({ type: Boolean })
  isSelected = false;

  @property({ type: String })
  role = '';

  private partAttributeDecider(isSelected: Boolean) : string {
    if (this.role === 'menuitem') return LIST_ITEM_PARTS.MENU_ITEM;
    if (isSelected) return LIST_ITEM_PARTS.LIST_ITEM_SELECTED;
    return LIST_ITEM_PARTS.LIST_ITEM;
  }

  render() {
    return html`
      <li
        data-testid="dx-list-item-list"
        part="${this.partAttributeDecider(this.isSelected)}"
        key="${this.key}"
        tabindex="0"
        ${this.role && `role="${this.role}"`}
        exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
      >
        <slot></slot>
      </li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-list-item': DxListItem
  }
}
