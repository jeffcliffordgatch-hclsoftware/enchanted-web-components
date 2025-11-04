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
import { SEARCH_CENTER_LAYOUT_PARTS } from '../../types/cssClassEnums';

/**
* Search template.
*/
@customElement('dx-search-center-layout')
export class DxSearchCenterLayout extends DxAcBaseElement {

  @property({ type: Boolean }) isTagsAvailable = false;

  @property()
  private isFeatureTagCloudEnabled: boolean = false; // isFeatureEnabled(EnumFeatures.TAG_CLOUD)

  render() {
    return html`
      <div part="header-container">
        <div part="header"><slot name="dx-header"></slot></div>
      </div>
      <div part="pagination-container">
        <div part="pagination"><slot name="dx-pagination"></slot></div>
      </div>
      <div part="main">
        <div part="search-input-container"><slot name="search-input-container"></slot></div>  
        <hr part="hr-part">
        <div part="search-result-container">
          <div part=${this.isFeatureTagCloudEnabled && this.isTagsAvailable
              ? SEARCH_CENTER_LAYOUT_PARTS.SEARCH_OUTPUT_CONTAINER
              : SEARCH_CENTER_LAYOUT_PARTS.SEARCH_OUTPUT_CONTAINER_NO_TAGS}>
            <slot name="search-output-container"></slot>
          </div>
          <div part=${this.isFeatureTagCloudEnabled && this.isTagsAvailable
              ? SEARCH_CENTER_LAYOUT_PARTS.TAG_CLOUD_CONTAINER
              : SEARCH_CENTER_LAYOUT_PARTS.TAG_CLOUD_CONTAINER_HIDDEN}>
            <slot name="tag-cloud"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-search-center-layout': DxSearchCenterLayout
  }
}
 