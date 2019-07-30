import { Text } from 'sketch'
import FontWeightTableLookup from './fontWeightTable';
import { tokenToArray, createSketchPath } from './utils';

export default function generateTextStyles(textTokens, colorTokens) {
    const textStyles = []
    const textColorTokens = colorTokens.filter(color => color.type === 'text')
    textTokens.forEach(textToken => {
        textColorTokens.forEach(textColorToken => {
            textAlignment.forEach(textAlign => {
                const textColorPath = tokenToArray(textColorToken.name, 3)
                const textTokenPath = tokenToArray(textToken.name, 2)
                const textStylePath = [textAlign.name].concat(textTokenPath, textColorPath)
                textStyles.push({
                    name: createSketchPath(textStylePath, [textColorToken.name, textToken.name]),
                    style: {
                        lineHeight: textToken.value.lineHeight,
                        fontSize: textToken.value.fontSize,
                        fontFamily: textToken.value.fontFamily,
                        fontWeight: FontWeightTableLookup(textToken.value.fontFamily, textToken.value.fontWeightOriginal),
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
        value: Text.Alignment.left
    },
    {
        name: 'Center',
        value: Text.Alignment.center
    },
    {
        name: 'Right',
        value: Text.Alignment.right
    },
]