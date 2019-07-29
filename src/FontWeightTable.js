
const DefatulSketchFontWeight = 6 // middle value

function convertCssFontWeightToSketch(cssWeight) {

    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values
    if (cssWeight == 'normal')
        cssWeight = 400
    if (cssWeight == 'bold' || cssWeight == 'bolder')
        cssWeight = 700
    if (cssWeight == 'lighter')
        cssWeight = 100

    // 0-12, 0 thinest, 12 boldest 
    // not sure how this corosponds to light, regular, bold, black...
    // https://sketchplugins.com/d/193-how-to-get-font-weight/3

    if (cssWeight < 150) {                            // 100
        return 3
    } else if (cssWeight >= 150 && cssWeight < 250) { // 200
        return 4
    } else if (cssWeight >= 250 && cssWeight < 350) { // 300
        return 5
    } else if (cssWeight >= 350 && cssWeight < 450) { // 400
        return 6
    } else if (cssWeight >= 450 && cssWeight < 550) { // 500
        return 7
    } else if (cssWeight >= 550 && cssWeight < 650) { // 600
        return 8
    } else if (cssWeight >= 650 && cssWeight < 750) { // 700
        return 9
    } else if (cssWeight >= 750 && cssWeight < 850) { // 800
        return 10
    } else if (cssWeight >= 850) {                    // 900
        return 11
    } else {
        return DefatulSketchFontWeight
    }
}

const FontWeightTable = {

    'Sentinel': {
        '400': 6,
    },
    'Roboto': {
        '400': 6,
    },
    'REI Stuart App': {
        '400': 6,
    },
    'Graphik App': {
        '400': 6,
    },

}
export default function FontWeightTableLookup(family, cssWeight) {

    return convertCssFontWeightToSketch(cssWeight) // for now?

    cssWeight = cssWeight + '' // convert to string

    const fontFamily = FontWeightTable[family]
    if (fontFamily == null)
        return DefatulSketchFontWeight

    const fontWeight = fontFamily[cssWeight]
    if (fontWeight == null)
        return DefatulSketchFontWeight

    return fontWeight

}