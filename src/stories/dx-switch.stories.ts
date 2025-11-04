import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-switch';

/**
 * @typedef DxSwitchProps
 * Props for the dx-switch web component.
 *
 * @property isChecked - Whether the switch is checked
 * @property isDisabled - Whether the switch is disabled
 */
export interface DxSwitchProps {
  isChecked?: boolean;
  isDisabled?: boolean;
}

const meta: Meta<DxSwitchProps> = {
  title: 'Input/dx-switch',
  tags: ['autodocs'],
  argTypes: {
    isChecked: { control: 'boolean', description: 'Checked', table: { defaultValue: { summary: 'false' } } },
    isDisabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    isChecked: false,
    isDisabled: false,
  },
  render: (args) => {
    return html`
      <dx-switch
        ?isChecked=${args.isChecked}
        ?isDisabled=${args.isDisabled}
      ></dx-switch>
    `;
  },
};

export default meta;
type Story = StoryObj<DxSwitchProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Default (Unchecked)</div>
          <dx-switch></dx-switch>
        </div>
        <div>
          <div>Checked</div>
          <dx-switch isChecked></dx-switch>
        </div>
        <div>
          <div>Disabled</div>
          <dx-switch isDisabled></dx-switch>
        </div>
        <div>
          <div>Checked & Disabled</div>
          <dx-switch isChecked isDisabled></dx-switch>
        </div>
      </div>
    `;
  },
};
