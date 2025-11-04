import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-list';
import '../components/ac/dx-list-item';

/**
 * @typedef DxListProps
 * Props for the dx-list web component.
 *
 * @property role - The ARIA role for the list.
 */
export interface DxListProps {
  role?: string;
}

const meta: Meta<DxListProps> = {
  title: 'Data Display/dx-list',
  tags: ['autodocs'],
  argTypes: {
    role: { control: 'text', description: 'The ARIA role for the list.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    role: '',
  },
  render: (args) => {
    return html`
      <dx-list role="${args.role}">
        <dx-list-item>Item 1</dx-list-item>
        <dx-list-item>Item 2</dx-list-item>
        <dx-list-item>Item 3</dx-list-item>
      </dx-list>
    `;
  },
};

export default meta;
type Story = StoryObj<DxListProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        <div>
          <div>Default</div>
          <dx-list>
            <dx-list-item>Item 1</dx-list-item>
            <dx-list-item>Item 2</dx-list-item>
            <dx-list-item>Item 3</dx-list-item>
          </dx-list>
        </div>
        <div>
          <div>With role="listbox"</div>
          <dx-list role="listbox">
            <dx-list-item>Option A</dx-list-item>
            <dx-list-item>Option B</dx-list-item>
          </dx-list>
        </div>
        <div>
          <div>Empty List</div>
          <dx-list></dx-list>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-list>
            <li style="color: red;">Custom HTML Item</li>
            <dx-list-item>Standard Item</dx-list-item>
          </dx-list>
        </div>
      </div>
    `;
  },
};
