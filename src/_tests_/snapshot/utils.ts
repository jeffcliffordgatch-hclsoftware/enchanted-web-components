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

export const SNAPSHOT_WINDOW_HEIGHT = 1200;
export const SNAPSHOT_WINDOW_WIDTH = 1600;

export const appendEnchantedStylingLink = (): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/enchanted.css'; // Append the link element to the document's head
  document.head.appendChild(link);
  return link;
};
