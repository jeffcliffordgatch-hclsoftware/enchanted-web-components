import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-input-select';

/**
 * @interface DxInputSelectProps
 * Props for the dx-input-select web component.
 *
 * @property label - The label for the select input.
 * @property disabled - If true, disables the select input.
 * @property selectedValue - The selected value.
 * @property placeholder - The placeholder text for the select input.
 * @property alwaysShowPlaceholder - If true, always show the placeholder.
 * @property options - The select options as an array of OptionData or strings.
 */
export interface DxInputSelectProps {
  label?: string;
  disabled?: boolean;
  selectedValue?: string;
  placeholder?: string;
  alwaysShowPlaceholder?: boolean;
  options?: string[] | { id?: string; name?: string; value?: string }[];
}

const meta: Meta<DxInputSelectProps> = {
  title: 'Input/dx-input-select',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'The label for the select input.', table: { defaultValue: { summary: '' } } },
    disabled: { control: 'boolean', description: 'If true, disables the select input.', table: { defaultValue: { summary: 'false' } } },
    selectedValue: { control: 'text', description: 'The selected value.', table: { defaultValue: { summary: '' } } },
    placeholder: { control: 'text', description: 'The placeholder text for the select input.', table: { defaultValue: { summary: '' } } },
    alwaysShowPlaceholder: { control: 'boolean', description: 'If true, always show the placeholder.', table: { defaultValue: { summary: 'false' } } },
    options: { control: 'object', description: 'The select options as an array of OptionData or strings.', table: { defaultValue: { summary: '[]' } } },
  },
  args: {
    label: 'Select an option',
    disabled: false,
    selectedValue: '',
    placeholder: 'Choose...',
    alwaysShowPlaceholder: false,
    options: [
      { id: '1', name: 'Option 1', value: '1' },
      { id: '2', name: 'Option 2', value: '2' },
      { id: '3', name: 'Option 3', value: '3' },
    ],
  },
  render: (args) => {return html`
    <dx-input-select
      label="${args.label}"
      ?disabled=${args.disabled}
      .selectedValue=${args.selectedValue}
      placeholder="${args.placeholder}"
      ?alwaysShowPlaceholder=${args.alwaysShowPlaceholder}
      .options=${args.options}
    ></dx-input-select>
  `;},
};

export default meta;
type Story = StoryObj<DxInputSelectProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <div>Default</div>
        <dx-input-select
          label="Select an option"
          .options=${[
            { id: '1', name: 'Option 1', value: '1' },
            { id: '2', name: 'Option 2', value: '2' },
            { id: '3', name: 'Option 3', value: '3' },
          ]}
        ></dx-input-select>
      </div>
      <div>
        <div>Disabled</div>
        <dx-input-select
          label="Select an option"
          .options=${[
            { id: '1', name: 'Option 1', value: '1' },
            { id: '2', name: 'Option 2', value: '2' },
            { id: '3', name: 'Option 3', value: '3' },
          ]}
          ?disabled=${true}
        ></dx-input-select>
      </div>
      <div>
        <div>With Placeholder</div>
        <dx-input-select
          label="Select an option"
          placeholder="Pick one..."
          ?alwaysShowPlaceholder=${true}
          .options=${[
            { id: '1', name: 'Option 1', value: '1' },
            { id: '2', name: 'Option 2', value: '2' },
            { id: '3', name: 'Option 3', value: '3' },
          ]}
        ></dx-input-select>
      </div>
      <div>
        <div>With Selected Value</div>
        <dx-input-select
          label="Select an option"
          .selectedValue="2"
          .options=${[
            { id: '1', name: 'Option 1', value: '1' },
            { id: '2', name: 'Option 2', value: '2' },
            { id: '3', name: 'Option 3', value: '3' },
          ]}
        ></dx-input-select>
      </div>
    </div>
  `;},
};
