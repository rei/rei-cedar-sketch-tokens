export function cdrTextLinkStyle(textStyle) {
    // TODO: bad
    // WHY? becasue we have no layer style for a link
    return {
        name: textStyle.name
            .replace('default', 'link')
        // .replace('Default', 'Link')
        ,
        style: {
            ...textStyle.style,
            textUnderline: 'single'
        }
    }
}

export function isRare(textTokenName, textColorTokenName) {
    // Detects if a certain combo of text and color is rarely or never used
    // TODO: bad? becasue its aware of token naming?
    const isDefault = textTokenName.match(/(default|strong|editorial)/ig) != null
    const isDefaultOnlyColor = textColorTokenName.match(/(form|error|link|disabled)/ig) != null
    const isEditorial = textTokenName.match(/(editorial)/ig) != null
    const isFormColor = textColorTokenName.match(/(form)/ig) != null
    return !isDefault && isDefaultOnlyColor || isEditorial && isFormColor
}