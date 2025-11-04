import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-panel';
import '../components/ac/dx-button';

/**
 * @typedef DxPanelProps
 * Props for the dx-panel web component.
 *
 * @property open - Whether the panel is open
 * @property title - The panel title
 * @property position - The panel position (left, right, etc.)
 */
export interface DxPanelProps {
  open?: boolean;
  title?: string;
  position?: string;
}

const meta: Meta<DxPanelProps> = {
  title: 'Overlay/dx-panel',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Whether the panel is open', table: { defaultValue: { summary: 'false' } } },
    title: { control: 'text', description: 'Panel title', table: { defaultValue: { summary: '' } } },
    position: { control: 'text', description: 'Panel position', table: { defaultValue: { summary: 'left' } } },
  },
  args: {
    open: true,
    title: 'Panel Title',
    position: 'left',
  },
  render: (args) => {
    return html`
      <dx-panel
        ?open=${args.open}
        title="${args.title}"
        position="${args.position}"
      >
        <div slot="center-title-content">Center Title Content</div>
        <div slot="content">
          <p>This is the panel content area. You can put any HTML or components here.</p>

        </div>
      </dx-panel>
    `;
  },
};

export default meta;
type Story = StoryObj<DxPanelProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default (Open, Left)</div>
          <dx-panel open title="Panel Title" position="left">
            <div slot="center-title-content">Center Title Content</div>
            <div slot="content">Panel content goes here.</div>
          </dx-panel>
        </div>
        <div>
          <div>Right Position</div>
          <dx-panel open title="Right Panel" position="right">
            <div slot="content">Panel on the right.</div>
          </dx-panel>
        </div>
      </div>
    `;
  },
};
