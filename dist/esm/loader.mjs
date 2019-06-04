import { c as patchEsm, b as bootstrapLazy } from './apex-71457d64.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["apex-chart",[[0,"apex-chart",{"type":[1],"width":[8],"height":[8],"options":[1040],"series":[1040],"chartObj":[32],"updateOptions":[64],"getApexChart":[64]}]]]], options);
  });
};

export { defineCustomElements };
