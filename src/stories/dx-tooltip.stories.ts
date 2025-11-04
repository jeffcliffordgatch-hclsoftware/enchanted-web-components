import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-tooltip';
import '../components/ac/dx-button';
import { TOOLTIP_PLACEMENT } from '../types/cssClassEnums';

/**
 * @typedef DxTooltipProps
 * Props for the dx-tooltip web component.
 *
 * @property tooltiptext - The tooltip text
 * @property placement - The tooltip placement
 * @property open - If true, tooltip is always visible
 */
export interface DxTooltipProps {
  tooltiptext?: string;
  placement?: TOOLTIP_PLACEMENT;
  open?: boolean;
}

const meta: Meta<DxTooltipProps> = {
  title: 'Feedback/dx-tooltip',
  tags: ['autodocs'],
  argTypes: {
    tooltiptext: { control: 'text', description: 'Tooltip text', table: { defaultValue: { summary: '' } } },
    placement: {
      control: { type: 'select' },
      options: [
        TOOLTIP_PLACEMENT.TOOLTIP_TOP,
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM,
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT,
        TOOLTIP_PLACEMENT.TOOLTIP_RIGHT,
        TOOLTIP_PLACEMENT.TOOLTIP_TOP_START,
        TOOLTIP_PLACEMENT.TOOLTIP_TOP_END,
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START,
        TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END,
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START,
        TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END,
        TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START,
        TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END,
      ],
      description: 'Tooltip placement',
      table: { defaultValue: { summary: TOOLTIP_PLACEMENT.TOOLTIP_TOP } },
    },
    open: { control: 'boolean', description: 'Always show tooltip', table: { defaultValue: { summary: 'false' } } },
  },
  args: {
    tooltiptext: 'Tooltip text',
    placement: TOOLTIP_PLACEMENT.TOOLTIP_TOP,
    open: false,
  },
  render: (args) => {
    return html`
      <dx-tooltip
        tooltiptext="${args.tooltiptext}"
        placement="${args.placement}"
        ?open=${args.open}
      >
        <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
      </dx-tooltip>
    `;
  },
};

export default meta;
type Story = StoryObj<DxTooltipProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-end;">
        <div>
          <div>Top</div>
          <dx-tooltip tooltiptext="Top tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Bottom</div>
          <dx-tooltip tooltiptext="Bottom tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Left</div>
          <dx-tooltip tooltiptext="Left tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Right</div>
          <dx-tooltip tooltiptext="Right tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}">
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Always Open</div>
          <dx-tooltip tooltiptext="Always open" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}" open>
            <dx-button slot="target" buttontext="Show Tooltip"></dx-button>
          </dx-tooltip>
        </div>
        <div>
          <div>Custom Content</div>
          <dx-tooltip tooltiptext="Custom content tooltip" placement="${TOOLTIP_PLACEMENT.TOOLTIP_TOP}">
            <button slot="target" style="padding: 8px 16px;">Hover me</button>
          </dx-tooltip>
        </div>
      </div>
    `;
  },
};
