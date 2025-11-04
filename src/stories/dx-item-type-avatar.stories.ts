import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-item-type-avatar';
import { ICON_ITEM_TYPE } from '../types/dx-svg-icon';

/**
 * @interface DxItemTypeAvatarProps
 * Props for the dx-item-type-avatar web component.
 *
 * @property itemType - The type of the item (icon type).
 * @property imageUrl - The image URL for the avatar.
 */
export interface DxItemTypeAvatarProps {
  itemType?: ICON_ITEM_TYPE | string;
  imageUrl?: string;
}

const meta: Meta<DxItemTypeAvatarProps> = {
  title: 'Data Display/dx-item-type-avatar',
  tags: ['autodocs'],
  argTypes: {
    itemType: {
      control: { type: 'select' },
      options: Object.values(ICON_ITEM_TYPE),
      description: 'The type of the item (icon type).',
      table: { defaultValue: { summary: '' } },
    },
    imageUrl: { control: 'text', description: 'The image URL for the avatar.', table: { defaultValue: { summary: '' } } },
  },
  args: {
    itemType: ICON_ITEM_TYPE.APPLICATION,
    imageUrl: '',
  },
  render: (args) => {return html`
    <dx-item-type-avatar
      .itemType=${args.itemType}
    ></dx-item-type-avatar>
  `;},
};

export default meta;
type Story = StoryObj<DxItemTypeAvatarProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; gap: 24px; flex-wrap: wrap; align-items: center;">
      <div>
        <div>Application</div>
        <dx-item-type-avatar itemType="${ICON_ITEM_TYPE.APPLICATION}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Blog</div>
        <dx-item-type-avatar itemType="${ICON_ITEM_TYPE.BLOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Catalog</div>
        <dx-item-type-avatar itemType="${ICON_ITEM_TYPE.CATALOG}"></dx-item-type-avatar>
      </div>
      <div>
        <div>PDF</div>
        <dx-item-type-avatar itemType="${ICON_ITEM_TYPE.PDF}"></dx-item-type-avatar>
      </div>
      <div>
        <div>User Profile</div>
        <dx-item-type-avatar itemType="${ICON_ITEM_TYPE.USER_PROFILE}"></dx-item-type-avatar>
      </div>
      <div>
        <div>Default (no type)</div>
        <dx-item-type-avatar></dx-item-type-avatar>
      </div>
    </div>
  `;},
};
