import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-input-textfield';
import { svgIconClear } from '../static/assets/svg-clear';
import { svgIconSearch } from '../static/assets/svg-search';

/**
 * @interface DxInputTextfieldProps
 * Props for the dx-input-textfield web component.
 *
 * @property value - The value of the textfield.
 * @property type - The input type (e.g., 'text', 'password').
 * @property label - The label for the textfield.
 * @property placeholder - The placeholder text for the textfield.
 * @property disabled - If true, disables the textfield.
 * @property clearIconUrl - The URL for the clear icon.
 * @property actionIconUrl - The URL for the action icon.
 */
export interface DxInputTextfieldProps {
  value?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  clearIconUrl?: string;
  actionIconUrl?: string;
}

const meta: Meta<DxInputTextfieldProps> = {
  title: 'Input/dx-input-textfield',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'The value of the textfield.', table: { defaultValue: { summary: '' } } },
    type: { control: 'text', description: 'The input type (e.g., "text", "password").', table: { defaultValue: { summary: 'text' } } },
    label: { control: 'text', description: 'The label for the textfield.', table: { defaultValue: { summary: '' } } },
    placeholder: { control: 'text', description: 'The placeholder text for the textfield.', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'If true, disables the textfield.', table: { defaultValue: { summary: 'false' } } },
    clearIconUrl: { control: 'text', description: 'The URL for the clear icon.', table: { defaultValue: { summary: '' } } },
    actionIconUrl: { control: 'text', description: 'The URL for the action icon.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    value: '',
    type: 'text',
    label: 'Text Field',
    placeholder: 'Enter text',
    disabled: false,
    clearIconUrl: '',
    actionIconUrl: '',
  },
  render: (args) => {return html`
    <dx-input-textfield
      .value=${args.value}
      type="${args.type}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?disabled=${args.disabled}
      .clearIconUrl=${svgIconClear}
      .actionIconUrl=${svgIconSearch}
    ></dx-input-textfield>
  `;},
};

export default meta;
type Story = StoryObj<DxInputTextfieldProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Enter text"
        ></dx-input-textfield>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-textfield
          label="Text Field"
          value="Disabled"
          ?disabled=${true}
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-textfield
          label="Text Field"
          placeholder="Type here..."
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Clear Icon</div>
        <dx-input-textfield
          label="Text Field"
          clearIconUrl="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
        ></dx-input-textfield>
      </div>
      <div>
        <div>With Action Icon</div>
        <dx-input-textfield
          label="Text Field"
          actionIconUrl="https://cdn-icons-png.flaticon.com/512/709/709586.png"
        ></dx-input-textfield>
      </div>
    </div>
  `;},
};
