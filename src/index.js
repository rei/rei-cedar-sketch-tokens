import sketch from 'sketch'
import generateColors from './Partials/generateColors.js';
import generateTextStyles from './Partials/generateTextStyles.js';
import generateLayerStyles from './Partials/generateLayerStyles.js';
import setStyles from './Partials/setStyles.js';

/**
 * TODO:
 * Add logo
 * add options for updating multiple versions
 * import token repo
 */

import * as sketchTokens_v_1_2 from '@rei/cdr-tokens-v1.2/dist/sketch/sketch.json'
// console.log(sketchTokens.default);

import * as sketchTokens_v_next from './Resources/sketch-v-next-tokens.json'
// console.log(vNextSketchTokens.default);

const document = sketch.getSelectedDocument()

export function overwriteAll_v_1_2(context) {
  _overwriteAll(sketchTokens_v_1_2)
}
export function overwriteAllV_v_next(context) {
  _overwriteAll(sketchTokens_v_next)
}

function _overwriteAll(tokenSet) {
  overwriteColors(tokenSet)
  overwriteTextStyles(tokenSet)
  overwriteLayerStyles(tokenSet)
}

export function deleteAll(context) {
  document.colors = []
  document.sharedTextStyles = []
  document.sharedLayerStyles = []
}

export function deleteAndOverwriteAll(context) {
  deleteAll(context)
  _overwriteAll(sketchTokens_v_next)
}

function overwriteColors(tokenSet) {
  const colorTokens = tokenSet.default.colors
  document.colors = generateColors(colorTokens);
}
function overwriteTextStyles(tokenSet) {
  const colorTokens = tokenSet.default.colors
  const textTokens = tokenSet.default.text
  setStyles(document, document.sharedTextStyles, generateTextStyles(textTokens, colorTokens), true)
}
function overwriteLayerStyles(tokenSet) {
  const prominenceTokens = tokenSet.default.prominence
  const spacingTokens = tokenSet.default.spacing
  const radiusTokens = tokenSet.default.radius
  const colorTokens = tokenSet.default.colors
  setStyles(document, document.sharedLayerStyles, generateLayerStyles(colorTokens, prominenceTokens, spacingTokens, radiusTokens))
}
