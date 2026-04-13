import type { Preview } from '@storybook/react-webpack5'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'garden-base',
      values: [
        { name: 'garden-base', value: '#E4EBF2' },
        { name: 'garden-dark', value: '#09090C' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;