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

export function maybeExclude(textTokenName, textColorTokenName) {
    // TODO: bad?
    const isDefault = textTokenName.match(/(default|strong)/ig) != null
    const isDefaultOnlyColor = textColorTokenName.match(/(form|error|link|disabled)/ig) != null
    return !isDefault && isDefaultOnlyColor
}