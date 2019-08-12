import { tokenToArray, createSketchName, createSketchNameTwo, zeroPadNumber, tokenPathToTrimSketchPath } from "./utils";
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

            const colorTokenPath = tokenPathToTrimSketchPath(colorToken.path, 1, 2, 1)

            const name = createSketchName(
                colorTokenPath,
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
        const prominenceValue = zeroPadNumber(prominenceToken.value[0].y) + 'px'
        const prominenceTokenPathRaw = prominenceToken.path || prominenceToken.value[0].path // TODO: theres a bug, it should be: prominenceTokenPath
        prominenceTokenPathRaw.splice(1, 0, prominenceValue)
        const prominenceTokenPath = tokenPathToTrimSketchPath(prominenceTokenPathRaw, 0, 1)

        return {
            name: createSketchName(
                prominenceTokenPath,
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
        .filter(insetToken => !insetToken.name.endsWith(leftRightTokenSuffix) && !insetToken.name.endsWith(topBottomSuffix))
        .forEach(insetToken => {

            let sizeValue = zeroPadNumber((insetToken.value[1] || insetToken.value[0])) + 'px'
            const insetTokenPathRaw = insetToken.path.slice()
            insetTokenPathRaw.splice(2, 0, sizeValue)
            insetTokenPathRaw[0] = PATHS.sizes
            const insetTokenPath = tokenPathToTrimSketchPath(insetTokenPathRaw)

            // add top,bottom,left,right back in a more controlled manner
            const insetTokenNames = insetToken.value.length > 1
                ? [insetToken.name, insetToken.name + leftRightTokenSuffix, insetToken.name + topBottomSuffix]
                : [insetToken.name]

            insetTokenNames.forEach(insetTokenName => {

                insetStyles.push({
                    name: createSketchName(
                        insetTokenPath,
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
            const sizeValue = zeroPadNumber(spaceToken.value) + 'px'
            const spaceTokenPathRaw = spaceToken.path.slice()
            spaceTokenPathRaw.splice(1, 0, sizeValue)
            spaceTokenPathRaw.unshift(PATHS.sizes)
            const spaceTokenPath = tokenPathToTrimSketchPath(spaceTokenPathRaw, 0, 1)

            return {
                name: createSketchName(spaceTokenPath, spaceToken.name),
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
        const radiusValue = typeof radiusToken.value == 'number'
            ? zeroPadNumber(radiusToken.value) + 'px'
            : radiusToken.value // when value = "50%"

        const radiusTokenPathRaw = radiusToken.path || tokenToArray(radiusToken.name, 1) // TODO: bug again, no path
        radiusTokenPathRaw.splice(1, 0, radiusValue)
        radiusTokenPathRaw.unshift(PATHS.sizes)
        const radiusTokenPath = tokenPathToTrimSketchPath(radiusTokenPathRaw, 0, 1)
        return {
            name: createSketchName(radiusTokenPath, radiusToken.name),
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
