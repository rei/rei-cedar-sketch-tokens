export interface ISketchTokens {
    colors: ISketchColorToken[],
    text: ISketchTextToken[],
    prominence: ISketchProminenceToken[],
    radius: ISketchRadiusToken[],
    spacing: {
        space: ISketchSpacingSpaceToken[],
        inset: ISketchSpacingInsetToken[]
    },
    breakpoints: ISketchBreakpointToken[],
}

export interface ISketchToken {
    name: string, // "cdr-type-subtype-whatever"
    value: any, // overriden
}

export interface ISketchColorToken extends ISketchToken { // https://developer.sketch.com/reference/api/#color-asset
    value: string, // "#000000" | "#000000FF" // hex value, alpha optional
    type: ColorTokenType,
}
export type ColorTokenType = "text" | "icon" | "background" | "border" // | "foreground" | "etc",

export interface ISketchProminenceToken extends ISketchToken {
    value: ISketchShadow[]
}
export interface ISketchShadow { // https://developer.sketch.com/reference/api/#shadow
    color: string, // "#00000011" // hex + alpha value
    x: number, // px
    y: number, // px
    blur: number, // px
    // spread: number, // px
}

export interface ISketchTextToken extends ISketchToken { // https://developer.sketch.com/reference/api/#style
    value: {
        fontFamily: string // ex: "REI Stuart App" | "Grapick App",
        fontWeight: number, // 0-12, 0 thinest, 12 boldest // not sure how this corosponds to light, regular, bold, black...
        fontWeightOriginal: number | string, // whatever it was before it was translated to fontWeight
        fontSize: number, // px
        lineHeight: number, // px
        textTransform: "none" | "uppercase" | "lowercase",
        letterSpacing: number, // percentage as a decimal value // ex: 0.01 = 01% // aka kerning
        fontStyle?: "italic" | undefined,
        fontStretch?: "compressed" | "condensed" | "narrow" | "expanded" | "poster" | undefined
        textUnderline?: "single" | undefined // ??? - look at Style.textUnderline - https://developer.sketch.com/reference/api/#style
    }
}

export interface ISketchRadiusToken extends ISketchToken {
    value: number
}

export interface ISketchSpacingSpaceToken extends ISketchToken {
    value: number
}

export interface ISketchSpacingInsetToken extends ISketchToken {
    // Simiar to css padding or margin
    value: [number] | [number, number] | [number, number, number] | [number, number, number, number]
}

export interface ISketchBreakpointToken extends ISketchToken {
    value: number
}
