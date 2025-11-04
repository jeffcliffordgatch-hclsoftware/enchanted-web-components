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

// Helper imports
import { LIST_PARTS } from '../../types/cssClassEnums';

/**
 * List component.
 */
@customElement('dx-list')
export class DxList extends DxAcBaseElement {
  @property({ type: String })
  role = '';

  render() {
    return html`
      <ul
        tabindex="-1"
        part=${LIST_PARTS.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role && `role="${this.role}"`}
      >
        <slot/>
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-list': DxList
  }
}
