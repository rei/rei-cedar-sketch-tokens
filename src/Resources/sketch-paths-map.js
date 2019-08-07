import { PATHS } from "../Partials/constants";


// TODO:
// its not ideal for this plugin to know about specific tokens its consuming.
// this list might need to be in the token repo ?
export default {

    "cdr-text-heading-700": [
        [PATHS.contextualUsages, "Page Title", PATHS.screenSmall],
        [PATHS.contextualUsages, "Section Heading", PATHS.screenLarge]
    ],
    "cdr-text-heading-800": [
        [PATHS.contextualUsages, "Page Title", PATHS.screenLarge]
    ],

    "cdr-text-subheading-300": [
        [PATHS.contextualUsages, "Subtitle", PATHS.screenSmall]
    ],
    "cdr-text-subheading-400": [
        [PATHS.contextualUsages, "Subtitle", PATHS.screenLarge],
        [PATHS.contextualUsages, "Subheadline", PATHS.screenSmall]
    ],

    "cdr-text-heading-600": [
        [PATHS.contextualUsages, "Section Heading", PATHS.screenSmall]
    ],
    // "cdr-text-heading-700" : [PATHS.screenLarge]

    "cdr-text-heading-400": [
        [PATHS.contextualUsages, "Subsection Heading", PATHS.screenSmall],
        [PATHS.contextualUsages, "Sub-subsection Heading", PATHS.screenLarge]
    ],
    "cdr-text-heading-500": [
        [PATHS.contextualUsages, "Subsection Heading", PATHS.screenLarge]
    ],

    "cdr-text-heading-300": [
        [PATHS.contextualUsages, "Sub-subsection Heading", PATHS.screenSmall]
    ],

    "cdr-text-display-800": [
        [PATHS.contextualUsages, "Headline", PATHS.screenSmall],
    ],
    "cdr-text-display-900": [
        [PATHS.contextualUsages, "Headline", PATHS.screenLarge],
    ],

    // "cdr-text-subheading-400" : [PATHS.screenSmall]
    "cdr-text-subheading-500": [
        [PATHS.contextualUsages, "Subheadline", PATHS.screenLarge],
    ],

    // "cdr-text-label-100": [ // doesn't exist yet
    //     [PATHS.contextualUsages, "Heading Label"],
    // ],

}
