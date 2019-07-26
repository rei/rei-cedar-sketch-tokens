import sketch from 'sketch'

const { Page, Text, Style, SymbolMaster, Artboard, Rectangle } = sketch

const document = sketch.getSelectedDocument()

// TODO: change to npm import
import * as sketchTokens from './Resources/sketch-tokens.json'
const colorTokens = sketchTokens.default.colors
const textTokens = sketchTokens.default.text
const prominenceTokens = sketchTokens.default.prominence
const spacingTokens = sketchTokens.default.spacing
const radiusTokens = sketchTokens.default.radius
// console.log(sketchTokens.default);

// import * as vNextSketchTokens from './Resources/sketch-v-next-tokens.json'
// const vNextTextTokens = vNextSketchTokens.default.text
// const vNextProminenceTokens = vNextSketchTokens.default.prominence

const SIZES_GROUP_TITLE = 'Sizes'
const SKETCH_PATH_DELIMITER = ' / '
const TOKEN_DELIMITER = '-'


// https://developer.sketch.com/reference/api/

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
  document.colors = generateColors();
}
function overwriteTextStyles(context) {
  setStyles(document.sharedTextStyles, generateTextStyles(), true)
}
function overwriteLayerStyles(context) {
  setStyles(document.sharedLayerStyles, generateLayerStyles())
}


function generateColors() {
  return colorTokens.map(color => ({
    // name: cssNameToSketch(color.name, 2),
    name: color.name,
    color: color.value
  }))
}

function generateTextStyles(context) {
  const textStyles = []
  const textColorTokens = colorTokens.filter(color => color.type === 'text')
  const textAlignment = [
    {
      name: 'Left',
      value: Text.Alignment.left
    },
    {
      name: 'Center',
      value: Text.Alignment.center
    },
    {
      name: 'Right',
      value: Text.Alignment.right
    },
  ]
  textTokens.forEach(textToken => {
    textColorTokens.forEach(textColorToken => {
      textAlignment.forEach(textAlign => {
        const textColorPath = tokenToArray(textColorToken.name, 3)
        const textTokenPath = tokenToArray(textToken.name, 2)
        const textStylePath = [textAlign.name].concat(textTokenPath, textColorPath)
        // const textStylePath = `${textAlign.name}-${textToken.name.substring(9)}-${textColorPath}`
        textStyles.push({
          name: createSketchPath(textStylePath, [textToken.name, textColorToken.name]),
          style: {
            lineHeight: textToken.value.lineHeight,
            fontSize: textToken.value.fontSize,
            fontFamily: textToken.value.fontFamily,
            fontWeight: textToken.value.fontWeight,
            textTransform: textToken.value.textTransform,
            textColor: textColorToken.value,
            alignment: textAlign.value,
            borders: []
          }
        })
      })
    })
  })
  return textStyles
}

function generateLayerStyles() {

  const fillStyles = []
  const borderStyles = []
  const lineStyles = []

  colorTokens
    // .filter(colorToken => colorToken.type !== 'text') // keeping text styles for flexibility
    .forEach(colorToken => {

      const colorPath = createSketchPath(
        tokenToArray(colorToken.name, 2),
        colorToken.name
      )

      if (colorToken.type === 'border') {
        borderStyles.push({
          name: colorPath,
          style: {
            borders: [{
              color: colorToken.value,
              position: Style.BorderPosition.Inside
            }],
          }
        })

      } else {
        fillStyles.push({
          name: colorPath,
          style: {
            fills: [{
              color: colorToken.value,
            }],
            borders: []
          }
        })

      }
    })

  let prominenceStyles = prominenceTokens.map(prominenceToken => {
    return {
      name: createSketchPath(
        tokenToArray(prominenceToken.name),
        prominenceToken.name
      ),
      style: {
        shadows: prominenceToken.value,
        borders: []
      }
    }
  })

  const insetStyles = spacingTokens.inset.map(insetToken => {
    // console.log(tokenToArray(insetToken.name, 2).unshift(SIZES_GROUP_TITLE));



    return {
      name: createSketchPath(
        [SIZES_GROUP_TITLE].concat(tokenToArray(insetToken.name, 2)),
        insetToken.name
      ),
      style: {
        fills: [{
          color: "#0FFFF022"
        }],
        borders: []
      }
    }
  })

  const spaceStyles = spacingTokens.space.map(spaceToken => {
    return {
      name: createSketchPath(
        [SIZES_GROUP_TITLE].concat(tokenToArray(spaceToken.name)),
        spaceToken.name
      ),
      style: {
        fills: [{
          color: "#FF770022"
        }],
        borders: []
      }
    }
  })

  const radiusStyles = radiusTokens.map(radiusToken => {
    return {
      name: createSketchPath(
        [SIZES_GROUP_TITLE].concat(tokenToArray(radiusToken.name)),
        radiusToken.name
      ),
      style: {
        fills: [],
        borders: []
      }
    }
  })

  const noneStyle = [{
    name: 'None',
    style: {
      fills: [],
      borders: []
    }
  }]

  const layerStyles = [].concat(
    fillStyles,
    borderStyles,
    prominenceStyles,
    noneStyle,
    insetStyles,
    spaceStyles,
    radiusStyles
  )

  return layerStyles
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



export function createSymbol(context) {

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

}



// UTIL FUNCTIONS //
const tokenToArray = (tokenName, trim = 1) => {
  return tokenName
    .split(TOKEN_DELIMITER)
    .slice(trim)
    .map(substring => stringCapitalizeFistLetter(substring))
}
const createSketchPath = (tokenArray = [], tokenNames = []) => {
  const tokenName = typeof tokenNames == 'string' ? tokenNames : tokenNames.join(' + ')

  return tokenArray
    .concat([tokenName])
    .join(SKETCH_PATH_DELIMITER)
}

const stringCapitalizeFistLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

function syncAllStyleInstances(sharedStyle) {
  sharedStyle.getAllInstances().forEach(styleInstance => {
    styleInstance.syncWithSharedStyle(sharedStyle)
  })
}

function originForNewArtboardWithSize(page, width, height) {
  // https://sketchplugins.com/d/1301-place-new-layer-artboard-next-to-the-elements-in-the-canvas
  const point = page.sketchObject.originForNewArtboardWithSize(CGSizeMake(width, height))
  return {
    x: point.x,
    y: point.y
  }
}

function MSRectOfAllPageLayers(page) {
  var rects = []
  page.layers.forEach(layer => {
    rects.push(layer.sketchObject.frame())
  })
  return MSRect.rectWithUnionOfRects(rects)
}

// function originForNewArtboardToRight(page, buffer = 32) {
//   const msRect = MSRectOfAllPageLayers(page)
//   const x = msRect.maxX() + buffer
//   const y = msRect.minY()
//   return {
//     x: x,
//     y: y
//   }
// }

// function originForNewArtboardToBottom(page, buffer = 32) {
//   const msRect = MSRectOfAllPageLayers(page)
//   const y = msRect.maxY() + buffer
//   const x = msRect.minX()
//   return {
//     x: x,
//     y: y
//   }
// }