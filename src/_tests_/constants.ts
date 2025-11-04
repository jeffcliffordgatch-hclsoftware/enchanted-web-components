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

import { DxDataGridColDef } from "../types/dx-data-grid";
import { SampleDataRow } from "./types";
import svgIconEdit from '../static/assets/svg-edit.svg';
import svgIconOverflow from '../static/assets/Overflow-menu--horizontal.svg';

export const SEARCH_COMMON_FIELDS = [
  'title',
  'description',
  'type',
  'tags'
];

export const DEFAULT_DOCUMENT_OBJECT_TYPE = 'title';

export const DX_DATA_GRID_COLUMNS: DxDataGridColDef[] = [
  {
    field: 'title', 
    headerName: 'Title',
    avatar: true,
    isLink: (data) => {
      return (data as SampleDataRow).type === 'Folder';
    },
    avatarType: 'itemType',
    sortEnable: true,
    actions: [
      {
        icon: svgIconEdit,
        text: "Edit",
        click: (_evt, { data }) => {
          return data;
        },
      },
      {
        icon: svgIconOverflow,
        text: "More",
        menu: [
          {
            text: "Read",
            click(_evt, { data }) {
              return data;
            },
          },
          {
            text: "Preview",
            click(_evt, { data }) {
              return data;
            }
          },
        ],
      },
    ],
  },
  { field: 'name', headerName: 'Name', sortEnable: true },
  {
    field: 'status',
    headerName: 'Status',
    sortEnable: true,
    actions: [
      {
        text: 'Publish',
        icon: svgIconOverflow,
        menu: [
          {
            text: "Read",
            click(_evt, { data }) {
              return data;
            },
          },
          {
            text: "Preview",
            click(_evt, { data }) {
              return data;
            },
          },
        ],
      }
    ]
  },
  { field: 'author', headerName: 'Author', keyForStringify: 'name', sortEnable: true },
  { field: '_source.updated', headerName: 'Last Modified', sortEnable: true }, 
  { field: 'contentPath', headerName: 'Location', sortEnable: true },
];

export const SHORT_PAUSE = 100;
export const LONG_PAUSE = 500;
