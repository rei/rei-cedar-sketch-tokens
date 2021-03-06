import { TOKEN_DELIMITER, TOKEN_COMBINATOR, SKETCH_PATH_DELIMITER, PATH_TOKEN_DELIMITER } from "./constants";

// UTIL FUNCTIONS //
export const tokenToArray = (tokenName, trim = 1) => {
    return tokenName
        .split(TOKEN_DELIMITER)
        .slice(trim)
        .map(substring => stringCapitalizeFistLetter(substring))
}

export const createSketchName = (sketchPath = [], tokens = []) => {
    const tokenNames = typeof tokens == 'string' ? tokens : tokens.join(TOKEN_COMBINATOR)
    const sketchStylePath = sketchPath.join(SKETCH_PATH_DELIMITER)
    const sketchStylePathWithTokens = sketchStylePath + PATH_TOKEN_DELIMITER + tokenNames
    return sketchStylePathWithTokens
}

export const createSketchNameTwo = (sketchPathArray = [], nameArray = [], tokens = []) => {
    const PATH_TOKEN_DELIMITER = ' \\ '
    const tokenNames = typeof tokens == 'string' ? tokens : tokens.join(TOKEN_COMBINATOR)
    const styleName = nameArray.join(' ')
    const sketchStylePath = styleName.length == 0
        ? sketchPathArray.join(SKETCH_PATH_DELIMITER)
        : [sketchPathArray, styleName].flat().join(SKETCH_PATH_DELIMITER)
    const sketchStylePathWithTokens = sketchStylePath + PATH_TOKEN_DELIMITER + tokenNames
    return sketchStylePathWithTokens
}

export function tokenPathToTrimSketchPath(tokenPath, trimFromFront, joinFromBack, insureFront) {
    return trimSketchPath(
        tokenPathToSketchPath(tokenPath),
        trimFromFront,
        joinFromBack,
        insureFront
    )
}

export function trimSketchPath(sketchPath, trimFromFront = 0, joinFromBack = 0, insureFront = 0) {

    // trim the front
    let trimmedSketchPath = sketchPath.slice(trimFromFront)

    // insure count at the front
    const [ensuredPath, uninsuredPath] = arraySplitAtIndex(trimmedSketchPath, insureFront)

    // join the tail
    const depth = Math.max(uninsuredPath.length - joinFromBack - 1, 0)
    const [remainingPath, tailPath] = arraySplitAtIndex(uninsuredPath, depth)
    const joinedTail = tailPath.join(' ')

    // flatten in all together
    return [ensuredPath, remainingPath, joinedTail].flat()
}

export function tokenPathToSketchPath(tokenPath) {
    return tokenPath.map(path => kebabCaseToCapitalCase(path))
}

export function kebabCaseToCapitalCase(string) {
    return string.split('-').map(word => stringCapitalizeFistLetter(word)).join(' ')
}

export function zeroPadNumber(num, size = 2) {
    // https://stackoverflow.com/a/2998822/5648839
    var s = "000000000" + num;
    return s.substr(s.length - size);
}

export function arraySplitAtIndex(array, index) {
    return [array.slice(0, index), array.slice(index)]
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

export function getSharedStyleTokenName(sharedStyleName) {
    const afterTheLastSlachRegEx = /[^/\\]+$/ig
    const tokenNameResults = afterTheLastSlachRegEx.exec(sharedStyleName)
    return tokenNameResults[0]
}

export function createMapOfTokensToSharedStyles(document, isText = false) {
    let mapOfTokensToSharedStyles = {}
    const styleSet = isText
        ? document.sharedTextStyles
        : document.sharedLayerStyles
    styleSet.forEach(style => {
        const tokenName = getSharedStyleTokenName(style.name)
        mapOfTokensToSharedStyles[tokenName] = style.id
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