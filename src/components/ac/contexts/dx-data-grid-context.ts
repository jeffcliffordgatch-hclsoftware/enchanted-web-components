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
import { createContext } from '@lit/context';

export type DxDataGridContextType = {
  // eslint-why - SearchItems has to be generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchItems?: any[];
  total?: number;
  searchValue?: string;
  page?: number;
  pageSize?: number;
  sortAttribute?: string;
  sortDirection?: 'asc' | 'desc';
  // eslint-why - SelectedSearchItems has to be generic
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedSearchItems?: any[];
};

export const dxDataGridContext = createContext<DxDataGridContextType>(Symbol('dx-data-grid-context'));
export default dxDataGridContext;
