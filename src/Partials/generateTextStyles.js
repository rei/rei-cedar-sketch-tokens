import { Text } from 'sketch'
import fontWeightTableLookup from './fontWeightTable';
import { tokenToArray, createSketchPath } from './utils';
import sketchPathMap from '../Resources/sketch-paths-map'

export default function generateTextStyles(textTokens, colorTokens) {
    console.log(sketchPathMap);
    const textStyles = []
    const textColorTokens = colorTokens.filter(color => color.type === 'text')
    textTokens.forEach(textToken => {
        textColorTokens.forEach(textColorToken => {
            textAlignment.forEach(textAlign => {
                const textColorPath = tokenToArray(textColorToken.name, 3)
                const textTokenPath = tokenToArray(textToken.name, 2)
                const textStylePath = [textAlign.name].concat(textTokenPath, textColorPath)
                const tokenNames = [textColorToken.name, textToken.name]
                if (textAlign.css != '') tokenNames.push(textAlign.css)
                textStyles.push({
                    name: createSketchPath(textStylePath, tokenNames),
                    style: {
                        lineHeight: textToken.value.lineHeight,
                        fontSize: textToken.value.fontSize,
                        fontFamily: textToken.value.fontFamily,
                        fontWeight: fontWeightTableLookup(textToken.value.fontFamily, textToken.value.fontWeightOriginal),
                        textTransform: textToken.value.textTransform,
                        textColor: textColorToken.value,
                        alignment: textAlign.value,
                        borders: []
                    }
                })
            })
        })
    })
    return textStyles
}

const textAlignment = [
    {
        name: 'Left',
        value: Text.Alignment.left,
        css: '' // 'text-align:left' is default css
    },
    {
        name: 'Center',
        value: Text.Alignment.center,
        css: 'text-align:center'
    },
    {
        name: 'Right',
        value: Text.Alignment.right,
        css: 'text-align:right'
    },
]