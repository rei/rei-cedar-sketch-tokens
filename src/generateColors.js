export default function generateColors(colorTokens) {
    return colorTokens.map(color => ({
        // name: cssNameToSketch(color.name, 2),
        name: color.name,
        color: color.value
    }))
}