import { tokenToArray, createSketchPath } from "./utils";
import { Style } from 'sketch'
import { SIZES_GROUP_TITLE, REDLINE_COLORS, DONT_USE_WARNING, SKETCH_PATH_DELIMITER } from "./constants";

export default function generateLayerStyles(colorTokens, prominenceTokens, spacingTokens, radiusTokens) {

    const fillStyles = []
    const borderStyles = []
    // const lineStyles = []

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

    const insetStyles = []
    spacingTokens.inset.forEach(insetToken => {
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

    const spaceStyles = spacingTokens.space.map(spaceToken => {
        return {
            name: createSketchPath(
                [SIZES_GROUP_TITLE].concat(tokenToArray(spaceToken.name)),
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

    const dontUseStyles = [{
        name: [SIZES_GROUP_TITLE, DONT_USE_WARNING].join(SKETCH_PATH_DELIMITER),
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
        radiusStyles,
        dontUseStyles
    )

    return layerStyles
}
