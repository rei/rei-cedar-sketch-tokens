function convertCssFontWeightToSketch(cssWeight) {

    // 0-12, 0 thinest, 12 boldest 
    // 6 & 7 are both medium 5 is regular
    // not sure how this corosponds to light, regular, bold, black...
    // https://sketchplugins.com/d/193-how-to-get-font-weight/3

    // https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Values


    let sketchWeight = Math.round(cssWeight / 100) + 2
    if (sketchWeight === 6) sketchWeight--
    return sketchWeight
}

export function fontFamilyLookup(familyName) {
    if (familyName.toLowerCase().includes('stuart')) return 'REI Stuart App'
    if (familyName.toLowerCase().includes('graphik')) return 'Graphik App'
    if (familyName.toLowerCase().includes('roboto condensed')) return 'Roboto Condensed'
    if (familyName.toLowerCase().includes('roboto')) return 'Roboto'
    if (familyName.toLowerCase().includes('sentinel')) return 'Sentinel'
    return familyName
}

export function fontWeightTableLookup(cssWeight) {

    return convertCssFontWeightToSketch(cssWeight) // for now?

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