import sketch from 'sketch'
import { Page, SymbolMaster, Rectangle, ShapePath } from 'sketch'
const document = sketch.getSelectedDocument()
// https://developer.sketch.com/reference/api/

// TODO: change to npm import
import * as sketchTokens from './Resources/sketch-tokens.json'
import generateColors from './generateColors.js';
import generateTextStyles from './generateTextStyles.js';
import generateLayerStyles from './generateLayerStyles.js';
import { syncAllStyleInstances, originForNewArtboardWithSize } from './utils.js';
import setStyles from './setStyles.js';

/**
 * TODO:
 * break up layerStyle exports into multiple files
 * add better token update matching - name independent
 * add px value prefix to sizes
 * add layer export for grid style
 * add options for updating multiple versions
 * import token repo
 */

const colorTokens = sketchTokens.default.colors
const textTokens = sketchTokens.default.text
const prominenceTokens = sketchTokens.default.prominence
const spacingTokens = sketchTokens.default.spacing
const radiusTokens = sketchTokens.default.radius
// console.log(sketchTokens.default);

// import * as vNextSketchTokens from './Resources/sketch-v-next-tokens.json'
// const vNextTextTokens = vNextSketchTokens.default.text
// const vNextProminenceTokens = vNextSketchTokens.default.prominence

export function overwriteAll(context) {
  overwriteColors()
  overwriteTextStyles()
  overwriteLayerStyles()
}

export function deleteAll(context) {
  document.colors = []
  document.sharedTextStyles = []
  document.sharedLayerStyles = []
}

export function deleteAndOverwriteAll(context) {
  deleteAll(context)
  overwriteAll(context)
}

function overwriteColors(context) {
  document.colors = generateColors(colorTokens);
}
function overwriteTextStyles(context) {
  setStyles(document, document.sharedTextStyles, generateTextStyles(textTokens, colorTokens), true)
}
function overwriteLayerStyles(context) {
  setStyles(document, document.sharedLayerStyles, generateLayerStyles(colorTokens, prominenceTokens, spacingTokens, radiusTokens))
}
