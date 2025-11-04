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

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';
import './dx-circular-progress';

// Helper imports
import { SNACKBAR_PARTS, SNACKBAR_TYPE } from '../../types/cssClassEnums';

// Icon imports
import { svgIconInfo } from '../../static/assets/svg-icon-info';
import { svgIconWarning } from '../../static/assets/svg-icon-warning';
import { svgIconError } from '../../static/assets/svg-icon-error';
import { svgIconSuccess } from '../../static/assets/svg-icon-success';


@customElement('dx-snackbar')
export class DxSnackbar extends DxAcBaseElement {

    @property({ type: String }) message = '';
    @property({ type: String }) type: SNACKBAR_TYPE = SNACKBAR_TYPE.SNACKBAR_INFO;

    private _renderPreElement() {
      if (SNACKBAR_TYPE.SNACKBAR_PROGRESS == this.type) {
        // valuecolor is HCLSOFTWAREBLUE09, trailcolor is the hex equivalent of Enchanted Palette WHITE15P
        return html`
          <div part="${SNACKBAR_PARTS.SNACKBAR_PROGRESS}">
            <dx-circular-progress
              size="36" strokewidth="2"
              valuecolor="#B3D9F8"
              trailcolor="#ffffff26"
            />
          </div>
        `;
      } else {
        const iconMap = {
          [SNACKBAR_TYPE.SNACKBAR_INFO]: { icon: svgIconInfo },
          [SNACKBAR_TYPE.SNACKBAR_WARNING]: { icon: svgIconWarning },
          [SNACKBAR_TYPE.SNACKBAR_ERROR]: { icon: svgIconError },
          [SNACKBAR_TYPE.SNACKBAR_SUCCESS]: { icon: svgIconSuccess },
        };
      
        const iconConfig = iconMap[this.type];

        return html`
          <dx-svg-icon
            data-test-id="dx-snackbar-icon"
            .icon=${iconConfig.icon}
            ?useCurrentColor={false}
            part="${SNACKBAR_PARTS.SNACKBAR_ICON} icon-${this.type}"
          ></dx-svg-icon>
        `;
      }
    }

    render() {
      return html`
        <div part=${SNACKBAR_PARTS.SNACKBAR_CONTAINER}>
          <div part=${SNACKBAR_PARTS.SNACKBAR_ICON_CONTAINER}>${this._renderPreElement()}</div>
          <span
            data-testid="dx-snackbar-message"
            part=${SNACKBAR_PARTS.SNACKBAR_MESSAGE}
            .innerHTML=${this.message}
          ></span>
          <div part=${SNACKBAR_PARTS.SNACKBAR_BUTTON_CONTAINER}>
            <div part=${SNACKBAR_PARTS.SNACKBAR_BUTTONS}><slot name="snackbar-buttons"></slot></div>
          </div>
        </div>
      `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-snackbar': DxSnackbar;
  }
}
