import { TOKEN_DELIMITER, TOKEN_COMBINATOR, SKETCH_PATH_DELIMITER } from "./constants";

// UTIL FUNCTIONS //
export const tokenToArray = (tokenName, trim = 1) => {
    return tokenName
        .split(TOKEN_DELIMITER)
        .slice(trim)
        .map(substring => stringCapitalizeFistLetter(substring))
}

export const createSketchPath = (tokenArray = [], tokenNames = []) => {
    const tokenName = typeof tokenNames == 'string' ? tokenNames : tokenNames.join(TOKEN_COMBINATOR)

    return tokenArray
        .concat([tokenName])
        .join(SKETCH_PATH_DELIMITER)
}

export const stringCapitalizeFistLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export function syncAllStyleInstances(sharedStyle) {
    sharedStyle.getAllInstances().forEach(styleInstance => {
        styleInstance.syncWithSharedStyle(sharedStyle)
    })
}

export function originForNewArtboardWithSize(page, width, height) {
    // https://sketchplugins.com/d/1301-place-new-layer-artboard-next-to-the-elements-in-the-canvas
    const point = page.sketchObject.originForNewArtboardWithSize(CGSizeMake(width, height))
    return {
        x: point.x,
        y: point.y
    }
}

export function MSRectOfAllPageLayers(page) {
    // https://sketchplugins.com/d/1301-place-new-layer-artboard-next-to-the-elements-in-the-canvas
    var rects = []
    page.layers.forEach(layer => {
        rects.push(layer.sketchObject.frame())
    })
    return MSRect.rectWithUnionOfRects(rects)
}

export function getSharedStyleTokenName(sharedStyle) {
    return /[^\s]+$/ig.exec(sharedStyle.name)
    // return sharedStyle.name.match(/[^\s]+$/ig)[0]
}

export function createMapOfTokensToSharedStyles(document) {
    let mapOfTokensToSharedStyles = {}
    document.sharedLayerStyles.forEach(sharedLayerStyle => {
        const tokenName = getSharedStyleTokenName(sharedLayerStyle)
        mapOfTokensToSharedStyles[tokenName] = sharedLayerStyle.id
    })
    return mapOfTokensToSharedStyles
}

// export function originForNewArtboardToRight(page, buffer = 32) {
//     const msRect = MSRectOfAllPageLayers(page)
//     const x = msRect.maxX() + buffer
//     const y = msRect.minY()
//     return {
//         x: x,
//         y: y
//     }
// }

// export function originForNewArtboardToBottom(page, buffer = 32) {
//     const msRect = MSRectOfAllPageLayers(page)
//     const y = msRect.maxY() + buffer
//     const x = msRect.minX()
//     return {
//         x: x,
//         y: y
//     }
// }