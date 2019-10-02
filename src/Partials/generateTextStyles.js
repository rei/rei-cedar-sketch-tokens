import { Text } from 'sketch'
import { tokenToArray, createSketchPath, createSketchPathTwo } from './utils'
import sketchPathMap from '../Resources/sketch-paths-map'
import { PATHS } from './constants';
import { cdrTextLinkStyle, maybeExclude } from '../Resources/cdr-text-link';
import { fontFamilyLookup, fontWeightTableLookup } from './fontWeightTable';

export default function generateTextStyles(textTokens, colorTokens) {
    const textStyles = []
    const textColorTokens = colorTokens.filter(color => color.type === 'text')
    textTokens.forEach(textToken => {
        const isDefaultText = textToken.name.includes('default')
        let textTokenPath = tokenToArray(textToken.name, 2)

        if (textToken.name.includes('compact')) {
            // TODO: BAD Special case just for now
            textTokenPath.pop()
            textTokenPath[textTokenPath.length - 1] += ' Compact'
        }

        textColorTokens.forEach(textColorToken => {

            if (maybeExclude(textToken.name, textColorToken.name)) return

            // textAlignment.forEach(textAlign => {
            const textColorPath = tokenToArray(textColorToken.name, 3)
            const textStylePath = [textTokenPath, textColorPath].flat() // [textAlign.name, PATHS.gridOptions, textTokenPath, textColorPath].flat()
            const tokenNames = [textColorToken.name, textToken.name]
            // if (textAlign.css != '') tokenNames.push(textAlign.css)

            const style = {
                lineHeight: textToken.value.lineHeight,
                fontSize: textToken.value.fontSize,
                fontFamily: fontFamilyLookup(textToken.value.fontFamily),
                fontWeight: fontWeightTableLookup(textToken.value.fontWeightOriginal),
                // fontWeight: textToken.value.fontWeight,
                textTransform: textToken.value.textTransform,
                textColor: textColorToken.value,
                kerning: Number(textToken.value.letterSpacing), // some are "0" ?
                alignment: Text.Alignment.left, // textAlign.value
                borders: []
            }

            textStyles.push({
                name: createSketchPathTwo(textTokenPath, textColorPath, tokenNames),
                style: style
            })

            if (sketchPathMap[textToken.name] != null) {
                sketchPathMap[textToken.name].forEach((sketchPath, i) => {
                    textStyles.push({
                        name: createSketchPathTwo(
                            sketchPath,
                            textColorPath,
                            tokenNames.concat([`ex${i}`])),
                        style: style
                    })
                })
            }

            if (isDefaultText && textColorToken.name.includes('link')) {
                textStyles.push(cdrTextLinkStyle({
                    name: createSketchPathTwo(textTokenPath, textColorPath, tokenNames),
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
        css: '' // 'cdr-text-align-left' is default css
    },
    {
        name: 'Center',
        value: Text.Alignment.center,
        css: 'cdr-text-align-center'
    },
    {
        name: 'Right',
        value: Text.Alignment.right,
        css: 'cdr-text-align-right'
    },
]