function convertCssFontWeightToSketch(cssWeight) {

    // 0-12, 0 thinest, 12 boldest 
    // not sure how this corosponds to light, regular, bold, black...
    // https://sketchplugins.com/d/193-how-to-get-font-weight/3

    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values
    if (cssWeight == 'normal') // 400
        return 6
    if (cssWeight == 'bold')   // 700
        return 9

    if (cssWeight < 150)                      // 100
        return 3
    if (cssWeight >= 150 && cssWeight < 250)  // 200
        return 4
    if (cssWeight >= 250 && cssWeight < 350)  // 300
        return 5
    if (cssWeight >= 350 && cssWeight < 450)  // 400
        return 6
    if (cssWeight >= 450 && cssWeight < 550)  // 500
        return 7
    if (cssWeight >= 550 && cssWeight < 650)  // 600
        return 8
    if (cssWeight >= 650 && cssWeight < 750)  // 700
        return 9
    if (cssWeight >= 750 && cssWeight < 850)  // 800
        return 10
    if (cssWeight >= 850)                     // 900
        return 11
    else
        return 6 // should be normal, middle value
}

export default function fontWeightTableLookup(family, cssWeight) {

    return convertCssFontWeightToSketch(cssWeight) // for now?

    // cssWeight = cssWeight + '' // convert to string

    // const fontFamily = FontWeightTable[family]
    // if (fontFamily == null)
    //     return DefatulSketchFontWeight

    // const fontWeight = fontFamily[cssWeight]
    // if (fontWeight == null)
    //     return DefatulSketchFontWeight

    // return fontWeight
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