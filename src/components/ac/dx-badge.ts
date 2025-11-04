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
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';

// Helper imports
import { BADGE_PARTS } from '../../types/cssClassEnums';
import { isLTR } from '../localization';
 
@customElement('dx-badge')
export class DxBadge extends DxAcBaseElement {

  @property({ type: String }) badge = '';
  
  render() {
    return html`<div part=${isLTR() ? BADGE_PARTS.BADGE_TEXT : BADGE_PARTS.BADGE_TEXT_RTL} data-testid="dx-badge">${this.badge}</div>`;
  }
}
 
declare global {
  interface HTMLElementTagNameMap {
    'dx-badge': DxBadge
  }
}
 