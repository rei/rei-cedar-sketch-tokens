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

/**
 * TODO:
 * split content out into partial files
 * add options for updating multiple versions
 * import token repo
 * add layer export for grid style
 * add px value prefix to sizes
 * add better token update matching - name independent
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
  setStyles(document.sharedTextStyles, generateTextStyles(textTokens, colorTokens), true)
}
function overwriteLayerStyles(context) {
  setStyles(document.sharedLayerStyles, generateLayerStyles(colorTokens, prominenceTokens, spacingTokens, radiusTokens))
}

function setStyles(currentStyles, newStyles, isText = false) {

  // map name to id
  const currentStylesNameToIdMap = {}
  currentStyles.forEach(currentStyle => {
    currentStylesNameToIdMap[currentStyle.name] = currentStyle.id
  })

  newStyles.forEach(newStyle => {

    const newStyleId = currentStylesNameToIdMap[newStyle.name]

    if (newStyleId == null) { // it doesn't exist, so add it
      currentStyles.push(newStyle)

    } else { // it does exist, so update it
      const currentStyle = isText
        ? document.getSharedTextStyleWithID(newStyleId)
        : document.getSharedLayerStyleWithID(newStyleId)

      // set current style by merging with newStyle
      currentStyle.style = {
        ...currentStyle.style,
        ...newStyle.style
      }
      syncAllStyleInstances(currentStyle)

    }

  })

}

function getSharedStyleTokenName(sharedStyle) {
  return /[^\s]+$/ig.exec(sharedStyle.name)
  // return sharedStyle.name.match(/[^\s]+$/ig)[0]
}

function createMapOfTokensToSharedStyles() {
  let mapOfTokensToSharedStyles = {}
  document.sharedLayerStyles.forEach(sharedLayerStyle => {
    const tokenName = getSharedStyleTokenName(sharedLayerStyle)
    mapOfTokensToSharedStyles[tokenName] = sharedLayerStyle.id
  })
  return mapOfTokensToSharedStyles
}

export function createSymbol(context, content) {

  // TODO: create this if it doesn't exist
  let symbolsPage = Page.getSymbolsPage(document)
  if (symbolsPage == null) {
    symbolsPage = Page.createSymbolsPage()
    symbolsPage.parent = document
  }

  const point = originForNewArtboardWithSize(symbolsPage, 100, 100)

  const symbolMaster = new SymbolMaster({
    name: 'Sizes / Spacing / 400 / 4x / Four X',
    parent: symbolsPage,
    frame: new Rectangle(point.x, point.y, 100, 100)
  })

  const tokenIdMap = createMapOfTokensToSharedStyles()

  const shapePath = new ShapePath({
    name: 'cdr-name',
    shapeType: ShapePath.ShapeType.Rectangle,
    parent: symbolMaster,
    frame: new Rectangle(0, 0, 100, 100),
    sharedStyleId: tokenIdMap['cdr-space-eighth-x'],
  })

  syncAllStyleInstances(document.getSharedLayerStyleWithID(tokenIdMap['cdr-space-eighth-x']))

}