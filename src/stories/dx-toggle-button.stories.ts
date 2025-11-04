import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-toggle-button';
import '../components/ac/dx-badge';
import '../components/ac/dx-icon-button';
// Icon imports
import tagUrl from '../static/assets/tag.svg';
import listUrl from '../static/assets/list.svg';
import { svgClose } from '../static/assets/svg-close';

/**
 * @typedef DxToggleButtonProps
 * Props for the dx-toggle-button web component.
 *
 * @property singleButton - Single button mode
 * @property toggleOn - Toggle state for single button
 * @property showBadge - Show badge on single button
 * @property disabled - Disabled state
 * @property outlined - Outlined style
 * @property selectedValue - Selected value for two-button mode
 * @property iconUrls - Icon URLs for two-button mode
 * @property values - Values for two-button mode
 * @property singleButtonTitle - Title for single button
 * @property singleButtonAria - Aria label for single button
 * @property icon - Icon template for single button
 */
export interface DxToggleButtonProps {
  singleButton?: boolean;
  toggleOn?: boolean;
  showBadge?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  selectedValue?: string;
  iconUrls?: string[];
  values?: string[];
  singleButtonTitle?: string;
  singleButtonAria?: string;
  icon?: unknown;
}


const meta: Meta<DxToggleButtonProps> = {
  title: 'Input/dx-toggle-button',
  tags: ['autodocs'],
  argTypes: {
    singleButton: { control: 'boolean', description: 'Single button mode', table: { defaultValue: { summary: 'false' } } },
    toggleOn: { control: 'boolean', description: 'Toggle state (single button)', table: { defaultValue: { summary: 'false' } } },
    showBadge: { control: 'boolean', description: 'Show badge (single button)', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', description: 'Disabled', table: { defaultValue: { summary: 'false' } } },
    outlined: { control: 'boolean', description: 'Outlined', table: { defaultValue: { summary: 'false' } } },
    selectedValue: { control: 'text', description: 'Selected value (two-button mode)', table: { defaultValue: { summary: '' } } },
    iconUrls: { control: 'object', description: 'Icon URLs (two-button mode)', table: { defaultValue: { summary: '[...]' } } },
    values: { control: 'object', description: 'Values (two-button mode)', table: { defaultValue: { summary: '[...]' } } },
    singleButtonTitle: { control: 'text', description: 'Single button title', table: { defaultValue: { summary: '' } } },
    singleButtonAria: { control: 'text', description: 'Single button aria-label', table: { defaultValue: { summary: '' } } },
    icon: { control: false, description: 'Icon template (single button)', table: { defaultValue: { summary: 'svg' } } },
  },
  args: {
    singleButton: false,
    toggleOn: false,
    showBadge: false,
    disabled: false,
    outlined: false,
    selectedValue: '',
    iconUrls: [],
    values: ['on', 'off'],
    singleButtonTitle: 'Toggle',
    singleButtonAria: 'Toggle',
    icon: '',
  },
  render: (args) => {
    return html`
      <dx-toggle-button
        ?toggleOn=${args.toggleOn}
        ?disabled=${args.disabled}
        ?outlined=${args.outlined}
        .selectedValue=${args.selectedValue}
        .iconUrls=${[tagUrl, listUrl]}
        .values=${args.values}
      ></dx-toggle-button>
    `;
  },
};

export default meta;
type Story = StoryObj<DxToggleButtonProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Two Button (Off)</div>
          <dx-toggle-button .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="off"></dx-toggle-button>
        </div>
        <div>
          <div>Two Button (On)</div>
          <dx-toggle-button .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="on"></dx-toggle-button>
        </div>
        <div>
          <div>Single Button (Off)</div>
          <dx-toggle-button singleButton .icon=${svgClose} singleButtonTitle="Power" singleButtonAria="Power off" toggleOn="false"></dx-toggle-button>
        </div>
        <div>
          <div>Single Button (On)</div>
          <dx-toggle-button singleButton .icon=${svgClose} singleButtonTitle="Power" singleButtonAria="Power on" toggleOn></dx-toggle-button>
        </div>
        <div>
          <div>Single Button with Badge</div>
          <dx-toggle-button singleButton .icon=${svgClose} singleButtonTitle="Badge" showBadge toggleOn></dx-toggle-button>
        </div>
        <div>
          <div>Disabled</div>
          <dx-toggle-button .iconUrls=${[tagUrl, listUrl]} .values=${['on', 'off']} selectedValue="off" disabled></dx-toggle-button>
        </div>
      </div>
    `;
  },
};
