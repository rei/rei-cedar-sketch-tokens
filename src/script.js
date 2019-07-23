import sketch from 'sketch'

const document = sketch.getSelectedDocument()

import * as sketchTokensJson from './Resources/sketch-tokens.json'
console.log(sketchTokensJson);

import sketchTokens from './Resources/sketchTokens.js'
const colorTokens = sketchTokens.colors
const textTokens = sketchTokens.text
const prominenceTokens = sketchTokens.prominence

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
    name: cssNameToSketch(color.name.substring(10)),
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

  let fillStyles = []
  let borderStyles = []
  let lineStyles = []

  colorTokens
    // .filter(color=>color.docs.type !== 'text') // keeping text styles for flexibility
    .forEach(color => {

      if (color.type === 'border') {

        // Borders with inset lines
        borderStyles.push({
          name: cssNameToSketch(color.name.substring(10)),
          style: {
            borders: [{
              color: color.value,
              position: sketch.Style.BorderPosition.Inside
            }],
          }
        })

        // Lines have centered line positions
        lineStyles.push({
          name: cssNameToSketch(color.name.substring(10).replace('border', 'line')),
          style: {
            borders: [{
              color: color.value,
              position: sketch.Style.BorderPosition.Center
            }],
          }
        })

      } else {

        fillStyles.push({
          name: cssNameToSketch(color.name.substring(10)),
          style: {
            fills: [{
              color: color.value,
            }],
            borders: []
          }
        })

      }
    })

  let prominenceStyles = prominenceTokens.map(prom => {
    return {
      name: cssNameToSketch(prom.name.substring(4)),
      style: {
        shadows: prom.value,
        borders: []
      }
    }
  })

  let noneStyle = [{
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
    noneStyle
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
    }

  })

}

// UTIL FUNCTIONS // 
const cssNameToSketch = string => string.split('-').map(substring => stringCapitalizeFistLetter(substring)).join('/')
const stringCapitalizeFistLetter = string => string.charAt(0).toUpperCase() + string.slice(1)
