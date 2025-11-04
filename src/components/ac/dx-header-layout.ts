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
import { DxAcBaseElement } from './dx-ac-base-element';
import { HEADER_LAYOUT_PARTS } from '../../types/cssClassEnums';
 
/**
 * Search Header template.
 */
@customElement('dx-header-layout')
export class DxHeaderLayout extends DxAcBaseElement {

  @property({ type: Boolean }) isTagsAvailable = false;
  @property({ type: Boolean }) isChatHeader = false;

  render() {
    return html`
      <div part="${this.isChatHeader ? HEADER_LAYOUT_PARTS.CHAT_MAIN_HEADER : HEADER_LAYOUT_PARTS.MAIN_HEADER}">
        <div part="${HEADER_LAYOUT_PARTS.HEADER_START_CONTAINER}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_START}"><slot name="header-start"></slot></div>
        </div>
        <div part="${HEADER_LAYOUT_PARTS.HEADER_START_CONTAINER_LABEL}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_START_LABEL}"><slot name="header-start-label"></slot></div>
        </div>
        <div part="${HEADER_LAYOUT_PARTS.HEADER_MIDDLE_CONTAINER}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_MIDDLE}"><slot name="header-middle"></slot></div>
        </div>
        <div part="${HEADER_LAYOUT_PARTS.HEADER_END_CONTAINER}">
          <div part="${HEADER_LAYOUT_PARTS.HEADER_END}"><slot name="header-end"></slot></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-header-layout': DxHeaderLayout
  }
}
  