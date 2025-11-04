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

import { browser } from '@wdio/globals';
import { render, TemplateResult } from 'lit';
import { SHADOW_ROOT_MODE_KEY } from '../components/constants';

/**
 * Initializes the session storage for the application.
 */
export const initSessionStorage = async (shadowRootModeKey?: string) => {
  if (!shadowRootModeKey) {
    shadowRootModeKey = SHADOW_ROOT_MODE_KEY;
  }
  if (
    window.sessionStorage.getItem(shadowRootModeKey) !== 'true'
  ) {
    window.sessionStorage.setItem(shadowRootModeKey, 'true');
    // the reload is needed to apply the sessionStorage changes
    await browser.refresh();
  }
};

/**
 * Renders a Lit template into a new HTMLElement.
 * @param template - The Lit template to render.
 * @returns The rendered HTMLElement.
 */
export const renderComponent = (template: TemplateResult): HTMLElement => {
  const container = document.createElement("div");
  document.body.replaceChildren(container);
  render(template, container);
  return container;
};
