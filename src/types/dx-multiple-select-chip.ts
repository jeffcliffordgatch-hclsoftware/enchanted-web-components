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

export type DxMultiSelectChip = {
  toggleDropDown: boolean;
  label: string;
  disabled: boolean;
  selectedValues: string[];
  options: string[];
  hiddenLabel: boolean;
  showChipCount: boolean;
  showAvatar: boolean;
  emptyOptions: boolean;
  clearIcon: boolean;
  fullWidth: boolean;
  error: boolean;
}

export type OptionData = {
  id: string;
  name: string;
  value: string;
}

export enum DxMultiSelectInputFieldType {
  MULTI_SELECT_SOURCE = 'multiSelectSource',
  DOCUMENT_OBJECT_TYPE = 'documentObjectType',
  QUERY_STRING = 'queryString',
  TRIGGER_BUTTON = 'triggerButton',
  PAGINATION_ROWS = 'paginationRows',
  PAGINATION_PAGE = 'paginationPage',
  SORT = 'sort',
  CLEAR_QUERY = 'clearQuery',
  SELECTION = 'selection',
  SELECT_ALL = 'selectAll',
}

export type MultiSelectChangeDetail = Array<{
  id: string;
  value: string;
  name: string;
}>;
