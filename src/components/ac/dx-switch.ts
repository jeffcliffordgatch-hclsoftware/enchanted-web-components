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
import { debounce } from 'lodash';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';

// Helper imports
import { SWITCH_PARTS } from '../../types/cssClassEnums';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

@customElement('dx-switch')
export class DxSwitch extends DxAcBaseElement {

  @property({ type: Boolean })
  isChecked = false;

  @property({ type: Boolean })
  isDisabled = false;

  private partAttributeDecider(part: string): string {
    let returnPart = part;
    switch (part) {
      case SWITCH_PARTS.SWITCH_SLIDER: {
        if (this.isChecked) {
          returnPart = SWITCH_PARTS.SWITCH_SLIDER_CHECKED;
          if (this.isDisabled) {
            returnPart = SWITCH_PARTS.SWITCH_SLIDER_CHECKED_DISABLED;
          }
        } else if (this.isDisabled) {
          returnPart = SWITCH_PARTS.SWITCH_SLIDER_DISABLED;
        }
        return returnPart;
      }
      case SWITCH_PARTS.SWITCH_LABEL: {
        if (this.isDisabled) {
          returnPart = SWITCH_PARTS.SWITCH_LABEL_DISABLED;
        }
        return returnPart;
      }
      case SWITCH_PARTS.SWITCH_INPUT: {
        return returnPart;
      }
      default:
        return returnPart;
    }
  }

  private handleSwitchToggle(event: Event) {
    event.stopPropagation();
    this.isChecked = !this.isChecked;
    const switchChangeEvent = new CustomEvent('change', {
      detail: { isChecked: this.isChecked },
    });
    this.dispatchEvent(switchChangeEvent);
  }

  private pressKeyHandler(event: Event) {
    // Cast the event to KeyboardEvent
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === KeyboardInputKeys.ENTER || keyboardEvent.key == KeyboardInputKeys.SPACE) {
      event.preventDefault();
      this.handleSwitchToggle(event);
    }
  }

  render() {
    return html`
    <label
      data-testid="dx-switch-label"
      part=${this.partAttributeDecider(SWITCH_PARTS.SWITCH_LABEL)}
      @keydown=${this.pressKeyHandler}
      tabindex=${this.isDisabled ? -1 : 0} >
      <input
        data-testid="dx-switch-input"
        type="checkbox"
        tabindex=-1
        disabled=${this.isDisabled || nothing}
        part=${this.partAttributeDecider(SWITCH_PARTS.SWITCH_INPUT)}
        @click=${debounce(this.handleSwitchToggle, 300)}>
      </input>
      <span
        data-testid="dx-switch-span"
        part=${this.partAttributeDecider(SWITCH_PARTS.SWITCH_SLIDER)}></span>
    </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-switch': DxSwitch;
  }
}
