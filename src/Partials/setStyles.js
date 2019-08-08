import { syncAllStyleInstances, createMapOfTokensToSharedStyles, getSharedStyleTokenName } from "./utils";

export default function setStyles(document, newStyles, isText = false) {

    const mapOfTokensToSharedStyles = createMapOfTokensToSharedStyles(document, isText)

    const nextStyles = []

    newStyles.forEach(newStyle => {

        const tokenId = getSharedStyleTokenName(newStyle.name)
        const newStyleId = mapOfTokensToSharedStyles[tokenId]

        if (newStyleId == null) { // it doesn't exist, so add it
            nextStyles.push(newStyle)

        } else { // it does exist, so update it
            const currentStyle = isText
                ? document.getSharedTextStyleWithID(newStyleId)
                : document.getSharedLayerStyleWithID(newStyleId)

            // set current style by merging with newStyle
            currentStyle.style = {
                ...currentStyle.style,
                ...newStyle.style
            }
            currentStyle.name = newStyle.name

            nextStyles.push(currentStyle)
        }

    })

    if (isText)
        document.sharedTextStyles = nextStyles
    else
        document.sharedLayerStyles = nextStyles

    // Update all styles
    const currentStyles = isText ? document.sharedTextStyles : document.sharedLayerStyles
    currentStyles.forEach(currentStyle => syncAllStyleInstances(currentStyle))


}