import sketch from 'sketch'
import generateColors from './Partials/generateColors.js';
import generateTextStyles from './Partials/generateTextStyles.js';
import generateLayerStyles from './Partials/generateLayerStyles.js';
import setStyles from './Partials/setStyles.js';

/**
 * TODO:
 * Use the actual v1.2 when it comes out
 * group based on the path:sring[] when it comes out - more flatter
 * add link style
 */

// this is actually v1.1 - not v1.2 as the npm distro says
import * as sketchTokens_v_1_1 from '@rei/cdr-tokens-v1.2/dist/sketch/sketch.json'
// console.log(sketchTokens_v_1_1.default);

import * as sketchTokens_v_next from './Resources/sketch-v-next-tokens.json'
// console.log(sketchTokens_v_next.default); 

const document = sketch.getSelectedDocument()

export function overwriteAll_v_1_1(context) {
  _overwriteAll(sketchTokens_v_1_1)
}
export function overwriteAll_v_next(context) {
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
  const { colors } = tokenSet.default
  document.colors = generateColors(colors);
}
function overwriteTextStyles(tokenSet) {
  const { colors, text } = tokenSet.default
  setStyles(document, generateTextStyles(text, colors), true)
}
function overwriteLayerStyles(tokenSet) {
  const { prominence, spacing, radius, colors } = tokenSet.default
  setStyles(document, generateLayerStyles(colors, prominence, spacing, radius))
}
