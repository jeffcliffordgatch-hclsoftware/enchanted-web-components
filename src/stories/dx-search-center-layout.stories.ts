import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-search-center-layout';

/**
 * @typedef DxSearchCenterLayoutProps
 * Props for the dx-search-center-layout web component.
 *
 * @property isTagsAvailable - Whether tags are available
 */
export interface DxSearchCenterLayoutProps {
  isTagsAvailable?: boolean;
}

const meta: Meta<DxSearchCenterLayoutProps> = {
  title: 'Layout/dx-search-center-layout',
  tags: ['autodocs'],
  argTypes: {
    isTagsAvailable: { control: 'boolean', description: 'Whether tags are available', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    isTagsAvailable: false,
  },
  render: (args) => {
    return html`
      <dx-search-center-layout ?isTagsAvailable=${args.isTagsAvailable}>
        <div slot="dx-header">
          <h2>Header Content</h2>
          <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
        </div>
        <div slot="dx-pagination">
          <button>Prev</button>
          <span>Page 1 of 10</span>
          <button>Next</button>
        </div>
        <div slot="search-input-container">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
        <div slot="search-output-container">
          <ul>
            <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
            <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
          </ul>
        </div>
        <div slot="tag-cloud">
          <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
          <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
        </div>
      </dx-search-center-layout>
    `;
  },
};

export default meta;
type Story = StoryObj<DxSearchCenterLayoutProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (No Tags)</div>
          <dx-search-center-layout>
            <div slot="dx-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="dx-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </dx-search-center-layout>
        </div>
        <div>
          <div>With Tags</div>
          <dx-search-center-layout isTagsAvailable>
            <div slot="dx-header">
              <h2>Header Content</h2>
              <span style="color: #888; font-size: 0.9em;">Subtitle or description</span>
            </div>
            <div slot="dx-pagination">
              <button>Prev</button>
              <span>Page 1 of 10</span>
              <button>Next</button>
            </div>
            <div slot="search-input-container">
              <input type="text" placeholder="Search..." />
              <button>Go</button>
            </div>
            <div slot="search-output-container">
              <ul>
                <li><b>Result 1</b> <span style="color: #888;">(details)</span></li>
                <li><b>Result 2</b> <span style="color: #888;">(details)</span></li>
              </ul>
            </div>
            <div slot="tag-cloud">
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag1</span>
              <span style="background: #eee; padding: 2px 8px; border-radius: 8px; margin-right: 4px;">Tag2</span>
            </div>
          </dx-search-center-layout>
        </div>
      </div>
    `;
  },
};
