import { syncAllStyleInstances, createMapOfTokensToSharedStyles, getSharedStyleTokenName } from "./utils";

export default function setStyles(document, currentStyles, newStyles, isText = false) {

    const mapOfTokensToSharedStyles = createMapOfTokensToSharedStyles(document, isText)

    newStyles.forEach(newStyle => {

        const tokenId = getSharedStyleTokenName(newStyle.name)
        const newStyleId = mapOfTokensToSharedStyles[tokenId]

        if (newStyleId == null) { // it doesn't exist, so add it
            currentStyles.push(newStyle)

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
            syncAllStyleInstances(currentStyle)

        }

    })

}