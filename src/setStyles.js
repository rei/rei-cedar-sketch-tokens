import { syncAllStyleInstances } from "./utils";

export default function setStyles(document, currentStyles, newStyles, isText = false) {

    // map name to id
    const currentStylesNameToIdMap = {}
    currentStyles.forEach(currentStyle => {
        currentStylesNameToIdMap[currentStyle.name] = currentStyle.id
    })

    newStyles.forEach(newStyle => {

        const newStyleId = currentStylesNameToIdMap[newStyle.name]

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
            syncAllStyleInstances(currentStyle)

        }

    })

}