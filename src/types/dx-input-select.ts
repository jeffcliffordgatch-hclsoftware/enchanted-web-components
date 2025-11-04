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

export type OptionData = {
  id: string;
  name: string;
  value: string;
}

export enum DxInputFieldType {
  CONTENT_SOURCE = 'contentSource',
  DOCUMENT_OBJECT_TYPE = 'documentObjectType',
  ADD_SEARCH_FILTER = 'addSearchFilter',
  ADD_STATUS_FILTER = 'addStatusFilter',
  QUERY_STRING = 'queryString',
  TRIGGER_BUTTON = 'triggerButton',
  PAGINATION_ROWS = 'paginationRows',
  PAGINATION_PAGE = 'paginationPage',
  PARENT_ID = 'parentId',
  SORT = 'sort',
  CLEAR_QUERY = 'clearQuery',
  SELECTION = 'selection',
  SELECT_ALL = 'selectAll',
}
