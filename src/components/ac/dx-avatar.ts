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
import { customElement, property } from 'lit/decorators.js';
import { html, nothing, TemplateResult } from 'lit';

// Component imports
import { DxAcBaseElement } from './dx-ac-base-element';

// Helper imports
import { AVATAR_PARTS, AVATAR_VARIANT, AVATAR_TYPE, AVATAR_COLOR } from '../../types/cssClassEnums';

// Icon imports
import placeHolderIcon from '../../static/assets/test-avatar-icon.svg';
import placeHolderImage from '../../static/assets/test-avatar-image.jpg';

@customElement('dx-avatar')
export class DxAvatar extends DxAcBaseElement {
  @property()
  variant: string | undefined;

  @property()
  imgUrl: string | undefined;

  @property()
  iconUrl: string | undefined;

  @property()
  color: AVATAR_COLOR | undefined;

  @property()
  iconTemplate: TemplateResult | string | undefined;

  @property()
  avatarText: string | undefined;

  @property()
  type: string | undefined;

  private getPartAttribute(part: AVATAR_PARTS): string {
    return this.color ? `${part} ${this.color}` : `${part} ${AVATAR_COLOR.AVATAR_DEFAULT_COLOR}`;
  }

  private renderImage(src: string, part: AVATAR_PARTS, alt: string) {
    return html`<img data-testid="dx-avatar-img" src="${src}" part=${this.getPartAttribute(part)} alt="${alt}" />`;
  }

  private renderIcon(src: TemplateResult | string | undefined, part: AVATAR_PARTS) {
    if (typeof src === 'string') {
      return html`<img data-testid="dx-avatar-img" src="${src}" part=${this.getPartAttribute(part)} alt="${part}" />`;
    }
    return html`<span data-testid="dx-avatar-icon-template" part=${this.getPartAttribute(part)}>${src}</span>`;
  }

  renderAvatarContent() {
    switch (this.variant) {
      case AVATAR_VARIANT.AVATAR_LETTER:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.avatarText ? html`<span data-testid="dx-avatar-letter" part=${this.getPartAttribute(AVATAR_PARTS.AVATAR_SPAN_ROUNDED)}>${this.avatarText.substring(0, 2)}</span>` : nothing;
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.avatarText ? html`<span data-testid="dx-avatar-letter" part=${this.getPartAttribute(AVATAR_PARTS.AVATAR_SPAN_CIRCULAR)}>${this.avatarText.substring(0, 2)}</span>` : nothing;
          default:
            return nothing;
        }
      case AVATAR_VARIANT.AVATAR_ICON:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.renderImage(this.iconUrl || placeHolderIcon, AVATAR_PARTS.AVATAR_ICON_ROUNDED, AVATAR_PARTS.AVATAR_ICON_ROUNDED);
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.renderImage(this.iconUrl || placeHolderIcon, AVATAR_PARTS.AVATAR_ICON_CIRCULAR, AVATAR_PARTS.AVATAR_ICON_CIRCULAR);
          default:
            return nothing;
        }
      case AVATAR_VARIANT.AVATAR_ICON_TEMPLATE:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.renderIcon(this.iconTemplate || placeHolderIcon, AVATAR_PARTS.AVATAR_ICON_TEMPLATE_ROUNDED);
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.renderIcon(this.iconTemplate || placeHolderIcon, AVATAR_PARTS.AVATAR_ICON_TEMPLATE_CIRCULAR);
          default:
            return nothing;
        } 
      case AVATAR_VARIANT.AVATAR_IMG:
        switch (this.type) {
          case AVATAR_TYPE.AVATAR_ROUNDED:
            return this.renderImage(this.imgUrl || placeHolderImage, AVATAR_PARTS.AVATAR_IMAGE_ROUNDED, AVATAR_PARTS.AVATAR_IMAGE_ROUNDED);
          case AVATAR_TYPE.AVATAR_CIRCULAR:
            return this.renderImage(this.imgUrl || placeHolderImage, AVATAR_PARTS.AVATAR_IMAGE_CIRCULAR, AVATAR_PARTS.AVATAR_IMAGE_CIRCULAR);
          default:
            return nothing;
        }  
    }
  }

  render() {
    const shape = this.type === AVATAR_TYPE.AVATAR_ROUNDED ? AVATAR_PARTS.AVATAR_DIV : AVATAR_PARTS.AVATAR_DIV_CIRCULAR;
    return html`
      <div data-testId="dx-${shape}" part=${this.getPartAttribute(shape)}>${this.renderAvatarContent()}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-avatar': DxAvatar
  }
}
