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
// External imports
import { $, browser } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/ac/dx-breadcrumbs';

// Icon imports
import { svgIconInfo } from '../../../static/assets/svg-icon-info';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { BREADCRUMBS_ICON_TYPE } from '../../../types/dx-breadcrumbs';
 
describe('DxBreadcrumbs snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  const paths = [
    { link: 'sampleLink', icon: svgIconInfo },
    { title: 'Breadcrumbs1', link: 'sampleLink', icon: svgIconInfo },
    { title: 'Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2Breadcrumb2', link: 'sampleLink' },
    { title: 'Breadcrumb3', link: 'sampleLink' },
    { title: 'Breadcrumb4', link: 'sampleLink', icon: svgIconInfo, disabled: true },
    { title: 'Breadcrumb5', link: 'sampleLink', icon: svgIconInfo },
    { title: 'Breadcrumbs6', parentId: '' },
    { title: 'Breadcrumbs6', parentId: '1', iconName: BREADCRUMBS_ICON_TYPE.HOME },
    { title: 'Breadcrumbs6', parentId: '1', iconName: BREADCRUMBS_ICON_TYPE.INFORMATION },
  ];

  function renderBreadcrumbs() {
    return html`
      <div data-testid="dx-breadcrumbs-layout" style="display: flex; flex-direction: column; gap: 20px; margin: 20px;">
        <dx-breadcrumbs .paths=${paths}></dx-breadcrumbs>
      </div>
    `;
  }

  it('DxBreadcrumbs - should capture snapshot for all possible variants and types of AC breadcrumbs component for Authoring styling', async () => {
    const link = appendEnchantedStylingLink();

    render(renderBreadcrumbs(), document.body);
    let breadcrumbsLayout = await $('>>>div[data-testid="dx-breadcrumbs-layout"]');
    await browser.checkElement(breadcrumbsLayout, 'dx-breadcrumbs-snapshot-baseline-authoring');
    document.head.removeChild(link);
  });
});
