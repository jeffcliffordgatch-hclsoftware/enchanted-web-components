/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved.      *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */
// External imports
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

//Helper imports
import { getCurrentDirection } from "../localization";
import { LOCALE_DIRECTIONS } from "../constants";
import { ACCORDION_SUMMARY_PARTS } from "../../types/cssClassEnums";
import { DxAcBaseElement } from "./dx-ac-base-element";

@customElement("dx-accordion-summary")
export class DxAccordionSummary extends DxAcBaseElement {
  @property({ type: String }) label = "";
  @property({ type: String }) secondaryText = "";

   @state()
  private isLTR: boolean = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;

   render() {
     return html`
      <div
        part="${this.isLTR
          ? `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_SUMMARY}`
          : `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_SUMMARY_RTL}`}"
      >
        ${this.label
          ? html` <div
              part=${this.isLTR
                ? `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_LABEL}`
                : `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_LABEL_RTL}`}
            >
              ${this.label}
            </div>`
          : html`<slot name="label"
              >${this.getMessage("accordion.summary.label.text")}</slot
            > `}
        ${this.secondaryText
          ? html` <div
              part="${this.isLTR
                ? `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_SECONDARY}`
                : `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_SECONDARY_RTL}`}"
            >
              ${this.secondaryText}
            </div>`
          : html`
              <div
                part="${this.isLTR
                  ? `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_SECONDARY}`
                  : `${ACCORDION_SUMMARY_PARTS.DX_ACCORDION_SECONDARY_RTL}`}"
              >
                <slot name="secondary-text"
                  >${this.getMessage("accordion.summary.secondary.text")}</slot
                >
              </div>
            `}
        <slot></slot>
      </div>
    `;
   }
}
declare global {
  interface HTMLElementTagNameMap {
    "dx-accordion-summary": DxAccordionSummary;
  }
}
