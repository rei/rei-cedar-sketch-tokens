import { Text } from 'sketch'
import fontWeightTableLookup from './fontWeightTable';
import { tokenToArray, createSketchName, createSketchNameTwo, tokenPathToSketchPath, tokenPathToTrimSketchPath } from './utils'
import sketchPathMap from '../Resources/sketch-paths-map'
import { PATHS } from './constants';
import { cdrTextLinkStyle, isRare } from '../Resources/cdr-text-link';

export default function generateTextStyles(textTokens, colorTokens) {
    const textStyles = []
    const textColorTokens = colorTokens.filter(color => color.type === 'text')
    textTokens.forEach((textToken, i) => {

        if (textToken.path[textToken.path.length - 1] == 'height')
            textToken.path.pop() // remove 'height' from the end of text path

        const textTokenPath = tokenPathToTrimSketchPath(textToken.path, 1)

        textColorTokens.forEach(textColorToken => {
            const textColorTokenPath = tokenPathToTrimSketchPath(textColorToken.path, 2, 1)

            // we don't need a lot of the combinations of text and color that are "Rare"
            if (isRare(textToken.name, textColorToken.name)) return

            const textColorPath = tokenToArray(textColorToken.name, 3)
            const tokenNames = [textColorToken.name, textToken.name]

            // textAlignment.forEach(textAlign => {
            // if (textAlign.className != '') tokenNames.push(textAlign.className)

            const style = {
                lineHeight: textToken.value.lineHeight,
                fontSize: textToken.value.fontSize,
                fontFamily: textToken.value.fontFamily,
                fontWeight: fontWeightTableLookup(textToken.value.fontFamily, textToken.value.fontWeightOriginal),
                textTransform: textToken.value.textTransform,
                textColor: textColorToken.value,
                alignment: Text.Alignment.left, // textAlign.value
                borders: []
            }

            textStyles.push({
                name: createSketchName(
                    textTokenPath.concat(textColorTokenPath),
                    tokenNames
                ),
                style: style
            })

            if (sketchPathMap[textToken.name] != null) {
                sketchPathMap[textToken.name].forEach((sketchPath, i) => {
                    textStyles.push({
                        name: createSketchName(
                            sketchPath.concat(textColorTokenPath),
                            tokenNames.concat([`ex${i}`])),
                        style: style
                    })
                })
            }

            if (textToken.name.includes('default') && textColorToken.name.includes('link')) {
                textStyles.push(cdrTextLinkStyle({
                    name: createSketchNameTwo(textTokenPath, textColorPath, tokenNames),
                    style: style
                }))
            }

            // })
        })
    })
    return textStyles
}

const textAlignment = [
    {
        name: 'Left',
        value: Text.Alignment.left,
        className: '' // 'cdr-text-align-left' is default css
    },
    {
        name: 'Center',
        value: Text.Alignment.center,
        className: 'cdr-text-align-center'
    },
    {
        name: 'Right',
        value: Text.Alignment.right,
        className: 'cdr-text-align-right'
    },
]