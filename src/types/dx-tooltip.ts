/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2025. All Rights Reserved. *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */

export interface ViewportBox {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export interface Overflow {
  left: number;
  top: number;
  right: number;
  bottom: number;
  total: number;
}

export enum OverflowClassification {
  ACCEPT = 'accept',
  CROSS = 'cross',
  PRIMARY = 'primary',
  MIXED = 'mixed'
}
