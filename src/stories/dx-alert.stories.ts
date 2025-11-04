import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '../components/ac/dx-alert';
import { ALERT_SEVERITY, ALERT_VARIANTS } from '../types/cssClassEnums';

const meta: Meta = {
  title: 'Feedback/dx-alert',
  component: 'dx-alert',
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: { type: 'radio' },
      options: [
        ALERT_SEVERITY.ALERT_INFO,
        ALERT_SEVERITY.ALERT_SUCCESS,
        ALERT_SEVERITY.ALERT_WARNING,
        ALERT_SEVERITY.ALERT_ERROR,
      ],
      description: 'Severity of the alert',
      defaultValue: ALERT_SEVERITY.ALERT_INFO,
    },
    variant: {
      control: { type: 'radio' },
      options: [
        ALERT_VARIANTS.ALERT_CONTAINED,
        ALERT_VARIANTS.ALERT_OUTLINED,
      ],
      description: 'Variant of the alert',
      defaultValue: ALERT_VARIANTS.ALERT_CONTAINED,
    },
    message: {
      control: 'text',
      description: 'Alert message',
      defaultValue: 'This is a dx-alert!',
    },
  },
  args: {
    severity: ALERT_SEVERITY.ALERT_INFO,
    variant: ALERT_VARIANTS.ALERT_CONTAINED,
    message: 'This is a dx-alert!',
  },
  parameters: {
    docs: {
      description: {
        component: 'Alert component for displaying important messages to users.'
      }
    }
  }
};

export default meta;

type Story = StoryObj<{ message: string; severity: string; variant: string }>;

export const DxAlert: Story = {
  render: (args) => {
    return html`
      <dx-alert .message=${args.message} severity=${args.severity} variant=${args.variant}></dx-alert>
    `;
  },
  name: 'DxAlert',
};

export const AllStates: Story = {
  render: () => {return html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div><strong>Contained Variant</strong></div>
      <dx-alert message="Info alert (contained)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Success alert (contained)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Warning alert (contained)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <dx-alert message="Error alert (contained)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_CONTAINED}"></dx-alert>
      <div style="margin-top: 24px;"><strong>Outlined Variant</strong></div>
      <dx-alert message="Info alert (outlined)" severity="${ALERT_SEVERITY.ALERT_INFO}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Success alert (outlined)" severity="${ALERT_SEVERITY.ALERT_SUCCESS}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Warning alert (outlined)" severity="${ALERT_SEVERITY.ALERT_WARNING}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
      <dx-alert message="Error alert (outlined)" severity="${ALERT_SEVERITY.ALERT_ERROR}" variant="${ALERT_VARIANTS.ALERT_OUTLINED}"></dx-alert>
    </div>
  `;},
  name: 'All States (Severity × Variant)',
};
