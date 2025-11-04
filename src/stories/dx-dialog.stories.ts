import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-dialog';
import { DialogSizes } from '../types/dx-dialog';

const meta: Meta = {
  title: 'Feedback/dx-dialog',
  component: 'dx-dialog',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [
        DialogSizes.XL,
        DialogSizes.LG,
        DialogSizes.MD,
        DialogSizes.SM,
        DialogSizes.XS,
      ],
      description: 'Dialog size',
      defaultValue: DialogSizes.XL,
    },
    open: {
      control: 'boolean',
      description: 'Open',
      defaultValue: true,
    },
    overrideTitle: {
      control: 'boolean',
      description: 'Override title with slot',
      defaultValue: false,
    },
    dialogTitle: {
      control: 'text',
      description: 'Dialog title',
      defaultValue: 'Dialog Title',
    },
  },
  args: {
    size: DialogSizes.XL,
    open: true,
    overrideTitle: false,
    dialogTitle: 'Dialog Title',
  },
  parameters: {
    docs: {
      description: {
        component: 'Dialog component with controls for size and boolean properties.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{
  size: string;
  open: boolean;
  overrideTitle: boolean;
  dialogTitle: string;
}>;

export const DxDialog: Story = {
  render: (args) => {
    return html`
      <dx-dialog
        .size=${args.size}
        ?open=${args.open}
        ?overrideTitle=${args.overrideTitle}
        .dialogTitle=${args.dialogTitle}
      >
        <span slot="title">Custom Title Slot</span>
        <div slot="content">Dialog content goes here.</div>
        <div slot="footer">Footer actions here.</div>
      </dx-dialog>
    `;
  },
  name: 'DxDialog',
};
