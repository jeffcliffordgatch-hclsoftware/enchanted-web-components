import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-breadcrumbs';

const meta: Meta = {
  title: 'Navigation/dx-breadcrumbs',
  component: 'dx-breadcrumbs',
  tags: ['autodocs'],
  argTypes: {
    paths: {
      control: 'object',
      description: 'Breadcrumb paths',
      defaultValue: [
        { name: 'Search', icon: 'search', disabled: false },
        { name: 'Content', icon: 'content', disabled: false },
        { name: 'Elements', icon: 'elements', disabled: false },
      ],
    },
  },
  args: {
    paths: [
      { name: 'Search', icon: 'search', disabled: false },
      { name: 'Content', icon: 'content', disabled: false },
      { name: 'Elements', icon: 'elements', disabled: false },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: 'Breadcrumbs component with example paths: Search, Content, Elements.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{ paths: Array<{ name: string; icon?: string; disabled?: boolean }> }>;

export const DxBreadcrumbs: Story = {
  render: (args) => {
    return html`
      <dx-breadcrumbs .paths=${args.paths}></dx-breadcrumbs>
    `;
  },
  name: 'DxBreadcrumbs',
};
