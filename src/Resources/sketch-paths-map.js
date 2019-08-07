
const usageFolder = "Expression"
const smScreen = "Sm screen"
const lgScreen = "Lg screen"

// TODO:
// its not ideal for this plugin to know about specific tokens its consuming.
// this list might need to be in the token repo ?
export default {

    "cdr-text-heading-700": [
        [usageFolder, "Page Title", smScreen],
        [usageFolder, "Section Heading", lgScreen]
    ],
    "cdr-text-heading-800": [
        [usageFolder, "Page Title", lgScreen]
    ],

    "cdr-text-subheading-300": [
        [usageFolder, "Subtitle", smScreen]
    ],
    "cdr-text-subheading-400": [
        [usageFolder, "Subtitle", lgScreen],
        [usageFolder, "Subheadline", smScreen]
    ],

    "cdr-text-heading-600": [
        [usageFolder, "Section Heading", smScreen]
    ],
    // "cdr-text-heading-700" : [lgScreen]

    "cdr-text-heading-400": [
        [usageFolder, "Subsection Heading", smScreen],
        [usageFolder, "Sub-subsection Heading", lgScreen]
    ],
    "cdr-text-heading-500": [
        [usageFolder, "Subsection Heading", lgScreen]
    ],

    "cdr-text-heading-300": [
        [usageFolder, "Sub-subsection Heading", smScreen]
    ],

    "cdr-text-display-800": [
        [usageFolder, "Headline", smScreen],
    ],
    "cdr-text-display-900": [
        [usageFolder, "Headline", lgScreen],
    ],

    // "cdr-text-subheading-400" : [smScreen]
    "cdr-text-subheading-500": [
        [usageFolder, "Subheadline", lgScreen],
    ],

    // "cdr-text-label-100": [ // doesn't exist yet
    //     [usageFolder, "Heading Label"],
    // ],

}