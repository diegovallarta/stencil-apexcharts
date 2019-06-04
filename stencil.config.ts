import {Config} from '@stencil/core';

export const config: Config = {
  namespace: 'apex',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      copy: [
        {
          'src': 'examples'
        }
      ],
      serviceWorker: null // disable service workers
    }
  ]
};
