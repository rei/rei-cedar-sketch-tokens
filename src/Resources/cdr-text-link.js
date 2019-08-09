export default function cdrTextLinkStyle(textStyle) {
    // WHY? becasue we have no layer style for a link
    return {
        name: textStyle.name.replace('default', 'link').replace('Default', 'Link'),
        style: {
            ...textStyle.style,
            textUnderline: 'single'
        }
    }
}
