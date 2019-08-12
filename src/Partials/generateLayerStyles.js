import { tokenToArray, createSketchPath, createSketchPathTwo, zeroPadNumber } from "./utils";
import { Style } from 'sketch'
import { PATHS, REDLINE_COLORS, SKETCH_PATH_DELIMITER } from "./constants";

export default function generateLayerStyles(colorTokens, prominenceTokens, spacingTokens, radiusTokens) {
    return [].concat(
        generateBorderAndFillStyles(colorTokens),
        generateProminenceStyles(prominenceTokens),
        generateSpacingStyles(spacingTokens.space),
        generateInsetStyles(spacingTokens.inset),
        generateGridStyles(),
        generateRadiusStyles(radiusTokens),
        generateExtraStyles(),
    )
}

function generateBorderAndFillStyles(colorTokens) {

    const borderAndFillStyles = []
    colorTokens
        // .filter(colorToken => colorToken.type !== 'text') // keeping text styles for flexibility
        .forEach(colorToken => {

            const colorTokenNameArray = tokenToArray(colorToken.name, 2)
            const colorTokenSketchPath = colorTokenNameArray.shift()

            const name = createSketchPathTwo(
                colorTokenSketchPath,
                colorTokenNameArray,
                colorToken.name
            )

            const style = colorToken.type === 'border'
                ? {
                    fills: [],
                    borders: [{
                        color: colorToken.value,
                        position: Style.BorderPosition.Inside
                    }],
                }
                : {
                    fills: [{
                        color: colorToken.value,
                    }],
                    borders: []
                }

            borderAndFillStyles.push({
                name: name,
                style: style
            })

        })
    return borderAndFillStyles
}

function generateProminenceStyles(prominenceTokens) {
    return prominenceTokens.map(prominenceToken => {
        let prominenceValue = zeroPadNumber(prominenceToken.value[0].y) + 'px'

        const prominenceTokenNameArray = tokenToArray(prominenceToken.name, 2)

        return {
            name: createSketchPathTwo(
                ['Prominence'],
                [prominenceValue, prominenceTokenNameArray].flat(),
                prominenceToken.name
            ),
            style: {
                shadows: prominenceToken.value,
                borders: []
            }
        }
    })
}

function generateInsetStyles(insetTokens) {
    const leftRightTokenSuffix = '-left-right'
    const topBottomSuffix = '-top-bottom'
    const insetStyles = []
    insetTokens
        // filter out top,bottom,left,right tokens...
        .filter(insetToken => !insetToken.name.endsWith(leftRightTokenSuffix) && !insetToken.name.endsWith(topBottomSuffix)) // 
        .forEach(insetToken => {

            let sizeValue = zeroPadNumber((insetToken.value[1] || insetToken.value[0])) + 'px'

            // add top,bottom,left,right back in a more controlled manner
            const insetTokenNames = insetToken.value.length > 1
                ? [insetToken.name, insetToken.name + leftRightTokenSuffix, insetToken.name + topBottomSuffix]
                : [insetToken.name]

            insetTokenNames.forEach(insetTokenName => {
                insetStyles.push({
                    name: createSketchPathTwo(
                        [PATHS.sizes, 'Inset', sizeValue],
                        tokenToArray(insetToken.name, 3),
                        insetTokenName
                    ),
                    style: {
                        fills: [{
                            color: REDLINE_COLORS.inset + "11"
                        }],
                        borders: [{
                            color: REDLINE_COLORS.inset + "22",
                            position: Style.BorderPosition.Inside
                        }]
                    }
                })
            })

        })
    return insetStyles
}

function generateSpacingStyles(spacingTokens) {
    return spacingTokens
        .filter(spaceToken => !spaceToken.name.includes('inset'))
        .map(spaceToken => {
            const sizeString = zeroPadNumber(spaceToken.value) + 'px'
            return {
                name: createSketchPathTwo(
                    [PATHS.sizes, 'Space'],
                    [sizeString].concat(tokenToArray(spaceToken.name, 2)),
                    spaceToken.name
                ),
                style: {
                    fills: [{
                        color: REDLINE_COLORS.space + "11"
                    }],
                    borders: [{
                        color: REDLINE_COLORS.space + "22",
                        position: Style.BorderPosition.Inside
                    }]
                }
            }
        })
}

function generateRadiusStyles(radiusTokens) {
    return radiusTokens.map(radiusToken => {
        const radiusString = typeof radiusToken.value == 'number'
            ? zeroPadNumber(radiusToken.value) + 'px'
            : radiusToken.value // when value = "50%"
        return {
            name: createSketchPathTwo(
                [PATHS.sizes, 'Radius'],
                [radiusString].concat(tokenToArray(radiusToken.name, 2)),
                radiusToken.name
            ),
            style: nullStyle
        }
    })
}

function generateGridStyles() {
    return [{
        name: [PATHS.sizes, 'Grid'].join(SKETCH_PATH_DELIMITER),
        style: {
            fills: [{
                color: REDLINE_COLORS.grid + "11"
            }],
            borders: [{
                color: REDLINE_COLORS.grid + "22",
                position: Style.BorderPosition.Inside
            }]
        }
    }]
}

function generateExtraStyles() {
    return [
        {
            name: [PATHS.sizes, PATHS.dontUse].join(SKETCH_PATH_DELIMITER),
            style: nullStyle
        },
        {
            name: 'None',
            style: nullStyle
        }
    ]
}

const nullStyle = {
    fills: [],
    borders: []
}
