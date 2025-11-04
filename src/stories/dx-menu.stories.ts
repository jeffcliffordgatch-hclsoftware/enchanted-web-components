import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-menu';
import '../components/ac/dx-menu-item';

/**
 * @typedef DxMenuProps
 * Props for the dx-menu web component.
 *
 * @property items - The menu items as an array of objects with label.
 * @property role - The ARIA role for the menu.
 */
export interface DxMenuProps {
  items?: { label: string }[];
  role?: string;
}

const meta: Meta<DxMenuProps> = {
  title: 'Navigation/dx-menu',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object', description: 'The menu items as an array of objects with label.', table: { defaultValue: { summary: '[]' } } },
    role: { control: 'text', description: 'The ARIA role for the menu.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    items: [
      { label: 'Menu 1' },
      { label: 'Menu 2' },
      { label: 'Menu 3' },
    ],
    role: '',
  },
  render: (args) => {
    return html`
      <dx-menu role="${args.role}">
        ${args.items && args.items.map(item => {return html`<dx-menu-item label="${item.label}"></dx-menu-item>`;})}
      </dx-menu>
    `;
  },
};

export default meta;
type Story = StoryObj<DxMenuProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <dx-menu>
            <dx-menu-item label="Menu 1"></dx-menu-item>
            <dx-menu-item label="Menu 2"></dx-menu-item>
            <dx-menu-item label="Menu 3"></dx-menu-item>
          </dx-menu>
        </div>
        <div>
          <div>With role="menubar"</div>
          <dx-menu role="menubar">
            <dx-menu-item label="File"></dx-menu-item>
            <dx-menu-item label="Edit"></dx-menu-item>
            <dx-menu-item label="View"></dx-menu-item>
          </dx-menu>
        </div>
        <div>
          <div>Empty Menu</div>
          <dx-menu></dx-menu>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-menu>
            <li style="color: green;">Custom HTML Item</li>
            <dx-menu-item label="Standard Item"></dx-menu-item>
          </dx-menu>
        </div>
      </div>
    `;
  },
};
