'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./apex-f592e032.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["apex-chart.cjs",[[0,"apex-chart",{"type":[1],"width":[8],"height":[8],"options":[1040],"series":[1040],"chartObj":[32],"updateOptions":[64],"getApexChart":[64]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
