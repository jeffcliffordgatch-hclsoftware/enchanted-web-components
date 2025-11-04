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

import { DEFAULT_LOCALE, LOCALE_DIRECTIONS, RTL_LOCALES } from './constants';

export type Templates = { [key: string]: string };
export type Replacement = { [key: string]: string };

export const getCurrentDirection = (): string => {
  const currentDir = document.documentElement.dir;
  return currentDir ? currentDir : LOCALE_DIRECTIONS.LTR;
};

/**
 * Returns current direction of the page
*/
export const isLTR = (): boolean => {
  const currentDirection = getCurrentDirection();
  return currentDirection === LOCALE_DIRECTIONS.LTR;
};

/**
 * Returns String separated with strings
*/
export const getFormattedString = (value: string | undefined): string => {
  if (value === undefined) {
    return '';
  } else {
    return value.replace(/([A-Z])/g, ' $1').trim();
  }
};

export const setCurrentDirection = (locale: string): void => {
  if (RTL_LOCALES.includes(locale)) {
    document.documentElement.setAttribute('dir', LOCALE_DIRECTIONS.RTL);
  } else {
    document.documentElement.setAttribute('dir', LOCALE_DIRECTIONS.LTR);
  }
};

export const getCurrentLocale = (element: HTMLElement = document.body): string => {
  const closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : DEFAULT_LOCALE;
};

