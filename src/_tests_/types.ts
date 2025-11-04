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

export type SampleDataRow = {
  title: string;
  name: string;
  content: string;
  author: string;
  type: 'collection' | 'image' | 'Folder' | 'Deleted Items',
  tags: string[];
  status: 'published'| 'draft',
  updated: string;
  contentPath: string;
};
