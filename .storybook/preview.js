import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { contexts } from './contexts';
import './storybook.css';

addParameters({
  backgrounds: {
    values: [
      { name: 'Default theme', value: '#ffffff', default: true },
      { name: 'Dark theme', value: '#333333' },
    ],
  },
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
