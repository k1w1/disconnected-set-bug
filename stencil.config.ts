import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'disconnected-set-bug',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
