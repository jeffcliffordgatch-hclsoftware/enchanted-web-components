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

export type ActionColumn =  Omit<DxDataGridColDef, 'actions'>

export type Action =  {
  text: string;
  icon?: string;
  menu?: ActionMenu[],
  click?: (evt: MouseEvent | CustomEvent, arg1: {
    data?: unknown;
    column?: ActionColumn
  }) => void;
  isVisible?: (data: unknown, column: ActionColumn) => boolean;
}
 
export type ActionMenu  = Omit<Action, 'menu'> & Partial<{field?: string;}>

export type DxDataGridColDefClickArgDetails = {
  data?: unknown;
  column?: ActionColumn,
  index?: number;
}

export type DxDataGridColDef = {
  field: string;
  headerName?: string;
  hideSortIcon?: boolean;
  editIcon?: boolean;
  editLink?: string
  overflowIcon?: boolean;
  overflowList?: OverflowList[];
  tooltip?: string;
  iconTypeTooltip?: string;
  avatar?: boolean;
  avatarType?: string;
  thumbnailUrl?: string;
  keyForStringify?: string;
  sortEnable?: boolean;
  isLink?: (data: unknown, column: DxDataGridColDef) => boolean,
  click?: (evt: MouseEvent | CustomEvent, arg1: DxDataGridColDefClickArgDetails) => void;
  actions?: Action[];
}

export type OverflowList = {
  field: string;
  name: string;
  icon?: string;
  hide: boolean,
}

export type HandleItemClickHandler = (evt: MouseEvent | CustomEvent | KeyboardEvent, itemData: DxDataGridColDefClickArgDetails) => void;

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum ChangeFocusValue {
  PANEL = 'panel',
  PAGINATION = 'pagination',
}
