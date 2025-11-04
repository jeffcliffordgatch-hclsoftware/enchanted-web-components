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
import { html, nothing } from 'lit';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';

// Helper imports
import { PAGINATION_PARTS } from '../../types/cssClassEnums';

@customElement('dx-anchor')
export class DxAnchorTag extends DxAcBaseElement {
  @property({ type: String }) url = '';
  @property({ type: Number }) weight = 0;
  @property({ type: String }) anchorTitle = '';
  @property({ type: String }) name = '';
  @property({ type: String }) rel = '';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) selected = false;
  @property({ type: Number }) value = 0;
  @property({ type: String }) mode = '';
  @property({ type: String }) imgurl = '';
  @property({ type: String }) target = undefined;

  private handleClick(event: Event) {
    const anchorClickEvent = new CustomEvent('anchorCustomClick', { 
      detail: true,
    });
    if (this.mode === PAGINATION_PARTS.PAGINATION) {
      event.preventDefault();
      this.dispatchEvent(anchorClickEvent);
    }
  }

  private partAttributeDecider(part: string): string {
    switch (part) {
      case PAGINATION_PARTS.RESULT_TITLE:
        return PAGINATION_PARTS.RESULT_TITLE;
      case PAGINATION_PARTS.PAGINATION:
        if (this.disabled) {
          return PAGINATION_PARTS.PAGINATION_INDEX_DISABLED;
        } else if (this.selected) {
          return PAGINATION_PARTS.PAGINATION_INDEX_SELECTED;
        } else {
          return PAGINATION_PARTS.PAGINATION_INDEX_DEFAULT;
        }
      default:
        return '';
    }
  }

  render() { 
    return html`
      <a
        data-testid="dx-anchor-link"
        part="${this.partAttributeDecider(this.mode)}"
        href="${this.url}"
        @click=${this.handleClick}
        title=${this.anchorTitle}
        disabled=${this.disabled}
        selected=${this.selected}
        rel=${this.rel}
        value=${this.value}
        target=${this.target}
      >
        ${ this.name || nothing}
        ${ !this.name && this.imgurl
          ? html`<img src="${this.imgurl}" alt="${this.anchorTitle}" />`
          : nothing
        }
      </a>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'dx-anchor': DxAnchorTag;
  }
}
