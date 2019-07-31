import { tokenToArray, createSketchPath } from "./utils";
import { Style } from 'sketch'
import { SIZES_GROUP_TITLE, REDLINE_COLORS, DONT_USE_WARNING, SKETCH_PATH_DELIMITER } from "./constants";

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

            const name = createSketchPath(
                tokenToArray(colorToken.name, 2),
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
}

function generateInsetStyles(insetTokens) {
    const insetStyles = []
    insetTokens.forEach(insetToken => {
        // TODO: these should come from the token repo
        const leftRightTokenSuffix = '-left-right'
        const topBottomSuffix = '-top-bottom'
        const insetTokenNames = insetToken.value.length > 1
            ? [insetToken.name, insetToken.name + leftRightTokenSuffix, insetToken.name + topBottomSuffix]
            : [insetToken.name]
        insetTokenNames.forEach(insetTokenName => {
            insetStyles.push({
                name: createSketchPath(
                    [SIZES_GROUP_TITLE].concat(tokenToArray(insetTokenName, 2)),
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
    return spacingTokens.map(spaceToken => {
        const sizeString = spaceToken.value + 'px'
        return {
            name: createSketchPath(
                [SIZES_GROUP_TITLE, 'Space', sizeString].concat(tokenToArray(spaceToken.name, 2)),
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
        return {
            name: createSketchPath(
                [SIZES_GROUP_TITLE].concat(tokenToArray(radiusToken.name)),
                radiusToken.name
            ),
            style: nullStyle
        }
    })
}

function generateGridStyles() {
    return [{
        name: [SIZES_GROUP_TITLE, 'Grid'].join(SKETCH_PATH_DELIMITER),
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
            name: [SIZES_GROUP_TITLE, DONT_USE_WARNING].join(SKETCH_PATH_DELIMITER),
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
