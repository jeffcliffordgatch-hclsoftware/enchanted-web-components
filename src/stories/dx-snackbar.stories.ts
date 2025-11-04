import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-snackbar';
import '../components/ac/dx-button';
import { SNACKBAR_TYPE } from '../types/cssClassEnums';

/**
 * @typedef DxSnackbarProps
 * Props for the dx-snackbar web component.
 *
 * @property message - The snackbar message
 * @property open - Whether the snackbar is open
 * @property type - The snackbar type (info, success, warning, error)
 */
export interface DxSnackbarProps {
  message?: string;
  open?: boolean;
  type?: SNACKBAR_TYPE;
}

const meta: Meta<DxSnackbarProps> = {
  title: 'Feedback/dx-snackbar',
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text', description: 'Snackbar message', table: { defaultValue: { summary: '' } } },
    open: { control: 'boolean', description: 'Whether the snackbar is open', table: { defaultValue: { summary: 'false' } } },
    type: {
      control: 'select',
      options: [
        SNACKBAR_TYPE.SNACKBAR_INFO,
        SNACKBAR_TYPE.SNACKBAR_SUCCESS,
        SNACKBAR_TYPE.SNACKBAR_WARNING,
        SNACKBAR_TYPE.SNACKBAR_ERROR,
      ],
      description: 'Snackbar type',
      table: { defaultValue: { summary: SNACKBAR_TYPE.SNACKBAR_INFO } },
    },
  },
  args: {
    message: 'Sample snackbar message',
    open: true,
    type: SNACKBAR_TYPE.SNACKBAR_INFO,
  },
  render: (args) => {
    return html`
      <dx-snackbar
        message="${args.message}"
        ?open=${args.open}
        .type="${args.type}"
      >
        <div slot="snackbar-buttons">
          <dx-button buttontext="Action" variant="text"></dx-button>
        </div>
      </dx-snackbar>
    `;
  },
};

export default meta;
type Story = StoryObj<DxSnackbarProps>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => {
    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 600px;">
        <div>
          <div>Info</div>
          <dx-snackbar message="Info message" open type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div>Success</div>
          <dx-snackbar message="Success!" open type="${SNACKBAR_TYPE.SNACKBAR_SUCCESS}"></dx-snackbar>
        </div>
        <div>
          <div>Warning</div>
          <dx-snackbar message="Warning!" open type="${SNACKBAR_TYPE.SNACKBAR_WARNING}"></dx-snackbar>
        </div>
        <div>
          <div>Error</div>
          <dx-snackbar message="Error!" open type="${SNACKBAR_TYPE.SNACKBAR_ERROR}"></dx-snackbar>
        </div>
        <div>
          <div>With Button</div>
          <dx-snackbar message="With action button" open type="${SNACKBAR_TYPE.SNACKBAR_INFO}">
            <div slot="snackbar-buttons">
              <dx-button buttontext="Undo" variant="text"></dx-button>
            </div>
          </dx-snackbar>
        </div>
        <div>
          <div>With Complex HTML Message</div>
          <dx-snackbar message="This is a <strong>bold</strong> message.<br>With a line break." open type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
        <div>
          <div>Closed</div>
          <dx-snackbar message="Closed snackbar" type="${SNACKBAR_TYPE.SNACKBAR_INFO}"></dx-snackbar>
        </div>
      </div>
    `;
  },
};
