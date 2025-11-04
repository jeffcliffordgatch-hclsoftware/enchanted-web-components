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

const generateHits = (count: number) => {
  const hits = [];
  for (let i = 1; i <= count; i++) {
    hits.push({
      title: `Test Document ${i}`,
      name: `Test Document ${i}`,
      content: `This is test document number ${i}.`,
      author: `Author ${i}`,
      type: i % 2 === 0 ? 'Content' : 'Image',
      tags: [`tag${i}`, 'document'],
      status: i % 3 === 0 ? 'Draft' : 'Published',
      updated: Date.now() - i * 1000,
      contentPath: `/content/test-document-${i}`
    });
  }
  return hits;
};

export const sampleData = {
  hits: {
    total: {
      value: 50,
      relation: 'eq'
    },
    max_score: 0,
    hits: generateHits(50)
  }
};
