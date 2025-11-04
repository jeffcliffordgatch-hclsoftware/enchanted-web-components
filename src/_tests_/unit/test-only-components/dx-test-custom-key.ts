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
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DxAcBaseElement } from '../../../components/ac/dx-ac-base-element';

/**
 * TEST COMPONENT - DO NOT USE IN PRODUCTION
 * 
 * This component exists solely to test the dynamic shadow root options functionality
 * in DxAcBaseElement. It overrides shadowRootModeKey to verify that:
 * 
 * 1. Subclasses can define their own sessionStorage key for shadow root mode
 * 2. The getShadowRootOptions() method respects the overridden key
 * 3. Per-class caching works correctly (each class gets its own cached options)
 * 4. Object reference stability is maintained (same object returned on subsequent calls)
 * 5. Different classes can have different shadow root modes simultaneously
 * 
 * This component uses 'DX_TEST_CUSTOM_SHADOW_ROOT_MODE' instead of the default
 * SHADOW_ROOT_MODE_KEY to demonstrate independent configuration.
 * 
 * @see dx-test-custom-key.test.ts for comprehensive test coverage
 */
@customElement('dx-test-custom-key')
export class DxTestCustomKey extends DxAcBaseElement {
  /**
   * Override the shadowRootModeKey to use a custom sessionStorage key.
   * This allows testing that subclasses can have their own shadow root mode settings
   * independent of the base class.
   */
  static override shadowRootModeKey = 'DX_TEST_CUSTOM_SHADOW_ROOT_MODE';

  render() {
    return html`
      <div class="test-content">
        <p>Test component with custom shadowRootModeKey</p>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dx-test-custom-key': DxTestCustomKey;
  }
}
