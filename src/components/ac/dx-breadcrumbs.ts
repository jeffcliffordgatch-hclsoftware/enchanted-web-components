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
import { customElement, property, state } from 'lit/decorators.js';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-breadcrumbs-item';
import './dx-svg-icon';
// Helper imports
import { BREADCRUMBS_PART } from '../../types/cssClassEnums';
import { PathType } from './dx-breadcrumbs-item'; 
import { isLTR } from '../localization';
// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--right';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--left';

/**
 * Breadcrumb component.
 */
@customElement('dx-breadcrumbs')
export class DxBreadcrumbs extends DxAcBaseElement {
  static override shadowRootOptions = {
    ...DxAcBaseElement.shadowRootOptions,
    delegatesFocus: true
  };
  
  @property({ type: Array<PathType> })
  paths = [];
  
  @property({ type: Function })
  handleBreadcrumbClick?: (_event: Event, _path: PathType) => void;

  @state()
  exportParts = Object.values(BREADCRUMBS_PART).join(',');

  @state()
  isLtr: boolean = isLTR();

  render() {
    return html`
      <nav part="${BREADCRUMBS_PART.BREADCRUMBS_CONTAINER}">
        <ul part="${BREADCRUMBS_PART.BREADCRUMBS_LIST}" role="navigation">
        ${ 
          this.paths?.map((path: PathType, index) => {
            return html`
              ${
                index < this.paths.length-1 ? 
                  html`<dx-breadcrumbs-item
                        @click="${(event: Event) => {
                          if (this.handleBreadcrumbClick && !path.disabled) this.handleBreadcrumbClick(event, path);
                        }}"
                        .path="${path}"
                        key="breadcrumb-${index}"
                        exportparts="${this.exportParts}"
                        data-testid="breadcrumbs-item"
                      >
                      </dx-breadcrumbs-item>
                      <li part="${BREADCRUMBS_PART.BREADCRUMBS_SEPARATOR}" aria-hidden="true">
                        <dx-svg-icon .icon=${ this.isLtr
                          ? html`<icon-chevron-right size="16"></icon-chevron-right>`
                          : html`<icon-chevron-left size="16"></icon-chevron-left>`
                        } ?useCurrentColor=${true}></dx-svg-icon>
                      </li>` :
                  html`<dx-breadcrumbs-item
                        .path="${path}"
                        key="breadcrumb-${index}"
                        exportparts="${this.exportParts}"
                        .partProp="${BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST}"
                        data-testid="breadcrumbs-item"
                        aria-current="page"
                      />`
              }
            `;
          })
        }
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-breadcrumbs': DxBreadcrumbs
  }
}
