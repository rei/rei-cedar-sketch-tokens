import { Text } from 'sketch'
import fontWeightTableLookup from './fontWeightTable';
import { tokenToArray, createSketchPath, createSketchPathTwo, tokenPathToSketchPath, tokenPathToTrimSketchPath } from './utils'
import sketchPathMap from '../Resources/sketch-paths-map'
import { PATHS } from './constants';
import { cdrTextLinkStyle, isRare } from '../Resources/cdr-text-link';

export default function generateTextStyles(textTokens, colorTokens) {
    const textStyles = []
    const textColorTokens = colorTokens.filter(color => color.type === 'text')
    textTokens.forEach((textToken, i) => {
        const isDefaultText = textToken.name.includes('default')
        // let textTokenPath = tokenToArray(textToken.name, 2)
        if (textToken.path[textToken.path.length - 1] == 'height')
            textToken.path.pop() // remove 'height' from the end of text path

        const textTokenPath = tokenPathToTrimSketchPath(textToken.path, 1)

        textColorTokens.forEach(textColorToken => {
            const textColorTokenPath = tokenPathToTrimSketchPath(textColorToken.path, 2, 1)

            if (i == 0) {
                log(textColorToken.path.join(' '))
                log(textColorTokenPath)
            }


            if (isRare(textToken.name, textColorToken.name)) return

            // textAlignment.forEach(textAlign => {
            const textColorPath = tokenToArray(textColorToken.name, 3)
            // const textStylePath = [textTokenPath, textColorPath].flat() // [textAlign.name, PATHS.gridOptions, textTokenPath, textColorPath].flat()
            const tokenNames = [textColorToken.name, textToken.name]
            // if (textAlign.css != '') tokenNames.push(textAlign.css)

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
                name: createSketchPathTwo(textTokenPath.concat(textColorTokenPath), [], tokenNames),
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