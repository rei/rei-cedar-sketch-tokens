import sketch from 'sketch'

const document = sketch.getSelectedDocument()

// import * as sketchNewTextTokens from './Resources/sketch-new-text-tokens.json'
import * as sketchTokens from './Resources/sketch-tokens.json'
console.log(sketchTokens);
const colorTokens = sketchTokens.default.colors
const textTokens = sketchTokens.default.text
const prominenceTokens = sketchTokens.default.prominence
const spacingTokens = sketchTokens.default.spacing

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
    name: cssNameToSketch(color.name, 10),
    color: color.value
  }))
}

function generateTextStyles(context) {
  const textStyles = []
  const textColorTokens = colorTokens.filter(color => color.type === 'text')
  const textAlignment = [
    {
      name: 'left',
      value: sketch.Text.Alignment.left
    },
    {
      name: 'center',
      value: sketch.Text.Alignment.center
    },
    {
      name: 'right',
      value: sketch.Text.Alignment.right
    },
  ]
  textTokens.forEach(textToken => {
    textColorTokens.forEach(textColor => {
      const textColorName = textColor.name.substring(15)
      textAlignment.forEach(textAlign => {
        const styleName = `${textToken.name.substring(9)}-${textColorName}-${textAlign.name}`
        textStyles.push({
          name: cssNameToSketch(styleName),
          style: {
            lineHeight: textToken.value.lineHeight,
            fontSize: textToken.value.fontSize,
            fontFamily: textToken.value.fontFamily,
            fontWeight: textToken.value.fontWeight,
            textTransform: textToken.value.textTransform,
            textColor: textColor.value,
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
    .filter(colorToken => colorToken.type !== 'text') // keeping text styles for flexibility
    .forEach(colorToken => {

      if (colorToken.type === 'border') {

        // Borders with inset lines
        borderStyles.push({
          name: cssNameToSketch(colorToken.name, 10),
          style: {
            borders: [{
              color: colorToken.value,
              position: sketch.Style.BorderPosition.Inside
            }],
          }
        })

        // // Lines have centered line positions
        // lineStyles.push({
        //   name: cssNameToSketch(colorToken.name.replace('border', 'line'), 10),
        //   style: {
        //     borders: [{
        //       color: colorToken.value,
        //       position: sketch.Style.BorderPosition.Center
        //     }],
        //   }
        // })

      } else {

        fillStyles.push({
          name: cssNameToSketch(colorToken.name, 10),
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
      name: cssNameToSketch(prominenceToken.name, 4),
      style: {
        shadows: prominenceToken.value,
        borders: []
      }
    }
  })

  const insetStyles = spacingTokens.inset.map(insetToken => {
    return {
      name: cssNameToSketch(insetToken.name, 4),
      style: {
        fills: [{
          // color: insetToken.value,
          color: "#FFFF022"
        }],
        borders: []
      }
    }
  })

  const spaceStyles = spacingTokens.space.map(spaceToken => {
    return {
      name: cssNameToSketch(spaceToken.name, 4),
      style: {
        fills: [{
          // color: insetToken.value,
          color: "#FF009022"
        }],
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
    // lineStyles, // replace 'border' with 'line' tokens will be confuse?
    prominenceStyles,
    noneStyle,
    insetStyles,
    spaceStyles
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

// UTIL FUNCTIONS // 
const cssNameToSketch = (string, trim = 0) => {
  return string.substring(trim).split('-').map(substring => stringCapitalizeFistLetter(substring)).join('/')
}
const stringCapitalizeFistLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

function syncAllStyleInstances(sharedStyle) {
  sharedStyle.getAllInstances().forEach(styleInstance => {
    styleInstance.syncWithSharedStyle(sharedStyle)
  })
}