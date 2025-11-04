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
import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-svg-icon';

// Helper imports
import { BREADCRUMBS_PART } from '../../types/cssClassEnums';
import { BREADCRUMBS_ICON_TYPE } from '../../types/dx-breadcrumbs';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/home';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/information';

export interface PathType {
  title?: string,
  parentId?: string,
  link?: string,
  icon?: TemplateResult,
  iconName?: string,
  disabled?: boolean
}
/**
 * Breadcrumb item component.
 */
@customElement('dx-breadcrumbs-item')
export class DxBreadcrumbsItem extends DxAcBaseElement {
  @property({ type: Object }) path?: PathType;
  @property({ type: String }) partProp?: String;

  @property({ type: String })
  key = '';

  isDisabled = (): boolean => {
    if (this.path && this.path.disabled) {
      return this.path.disabled === true;
    }
    return false;
  };

  getPartValue() {
    if (this.partProp && this.isDisabled()) {
      return `${this.partProp} ${BREADCRUMBS_PART.BREADCRUMBS_DISABLED}`;
    } else if (this.partProp) {
      return this.partProp;
    }
    return `${BREADCRUMBS_PART.BREADCRUMBS_ITEM} ${this.isDisabled() ? BREADCRUMBS_PART.BREADCRUMBS_DISABLED : ''}`;
  }

  renderIcon() {
    // Check if icon is provided, then render it
    if (this.path?.icon) {
      return html`<dx-svg-icon .icon=${this.path.icon} part=${BREADCRUMBS_PART.BREADCRUMBS_ICON} color="#00000099" data-testid="breadcrumbs-item-icon"/>`;
    }

    // If iconName is provided, render the corresponding icon
    if (this.path?.iconName) {
      let part;

      // check if item is last
      if (this.partProp === BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST) {
        part = BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST_ICON;
      } else {
        part = BREADCRUMBS_PART.BREADCRUMBS_ICON;
      }

      switch (this.path.iconName) {
        case BREADCRUMBS_ICON_TYPE.HOME:
          return html`<icon-home size="16" part=${part}></icon-home>`;

        case BREADCRUMBS_ICON_TYPE.INFORMATION:
          return html`<icon-information size="16" part=${part}></icon-information>`;

        default:
          // Return nothing for other icons
          return html``;
      }
    }

    // Return empty, if both icon and iconName is not provided
    return '';
  }

  render() {
    return html`
      <li part="${this.getPartValue()}" key=${this.key} title=${this.path?.title}>
        <a href="#" part="${this.partProp ? BREADCRUMBS_PART.BREADCRUMBS_LINK_LAST: BREADCRUMBS_PART.BREADCRUMBS_LINK}" tabindex="${this.isDisabled() ? '-1' : '0'}">
          <div part="${BREADCRUMBS_PART.BREADCRUMBS_CONTENT}">
            ${this.renderIcon()}
            ${this.path?.title && html`<span part="${BREADCRUMBS_PART.BREADCRUMBS_TEXT}" data-testid="breadcrumbs-title">${this.path.title}</span>`}
          </div>
        </a>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-breadcrumbs-item': DxBreadcrumbsItem
  }
}
