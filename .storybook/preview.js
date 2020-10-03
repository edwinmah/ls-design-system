import React, { Fragment } from 'react';

import { GlobalStyle } from '../src/shared/global';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <Fragment>
      <GlobalStyle />
      <Story />
    </Fragment>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
