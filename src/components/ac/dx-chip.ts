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
import { customElement, property } from 'lit/decorators.js';
import { DxAcBaseElement } from './dx-ac-base-element';
import { html, nothing } from 'lit';

// Component imports

// Helper imports
import { CHIP_PARTS } from '../../types/cssClassEnums';
import { getCurrentDirection } from '../localization';
import { LOCALE_DIRECTIONS } from '../constants';

@customElement('dx-chip')
export class DxChip extends DxAcBaseElement {
  @property({ type: String }) name = '';
  @property({ type: Number }) count = 0;
  @property({ type: Boolean }) showChipCount = false;
  @property({ type: Boolean }) showAvatar = false;
  @property({ type: Boolean }) clearIcon = false; 
  @property({ type: Boolean }) disabled = false; 

  private isLocaleRTL () {
    const currentDirection = getCurrentDirection();        
    if (currentDirection === LOCALE_DIRECTIONS.RTL) {
      return true;
    }
    return false;
  }

  render() {
    const chipCountPart = this.isLocaleRTL() ? CHIP_PARTS.CHIP_COUNT_RTL : CHIP_PARTS.CHIP_COUNT;
    return html`
      <div part=${this.disabled ? `${CHIP_PARTS.CHIP_DIV} ${CHIP_PARTS.CHIP_DIV_DISABLED}` : CHIP_PARTS.CHIP_DIV} tabindex=${this.disabled ? '-1' : '0'}>
        ${this.showAvatar
          ? html`<dx-avatar variant="avatar-icon" ?disabled=${this.disabled}></dx-avatar>`
          : nothing}
        <span part=${CHIP_PARTS.CHIP_NAME}>${this.name}</span>
        ${this.showChipCount
          ? html`<span part=${chipCountPart}>${this.count}</span>`
          : nothing}
        ${this.clearIcon
          ? html`<slot name="clear-icon"></slot>`
          : nothing}
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'dx-chip': DxChip
  }
}
