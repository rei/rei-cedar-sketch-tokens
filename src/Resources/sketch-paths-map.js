import { PATHS } from "../Partials/constants";


// TODO:
// its not ideal for this plugin to know about specific tokens its consuming.
// this list might need to be in the token repo ?
export default {

    "cdr-text-heading-700": [
        [PATHS.contextualUsages, "609 Page Title", PATHS.screenSmall],
        [PATHS.contextualUsages, "409 Section Heading", PATHS.screenLarge]
    ],
    "cdr-text-heading-800": [
        [PATHS.contextualUsages, "609 Page Title", PATHS.screenLarge]
    ],

    "cdr-text-subheading-300": [
        [PATHS.contextualUsages, "608 Subtitle", PATHS.screenSmall]
    ],
    "cdr-text-subheading-400": [
        [PATHS.contextualUsages, "608 Subtitle", PATHS.screenLarge],
        [PATHS.contextualUsages, "808 Subheadline", PATHS.screenSmall]
    ],

    "cdr-text-heading-600": [
        [PATHS.contextualUsages, "409 Section Heading", PATHS.screenSmall]
    ],
    // "cdr-text-heading-700" : []

    "cdr-text-heading-400": [
        [PATHS.contextualUsages, "408 Subsection Heading", PATHS.screenSmall],
        [PATHS.contextualUsages, "407 Sub-subsection Heading", PATHS.screenLarge]
    ],
    "cdr-text-heading-500": [
        [PATHS.contextualUsages, "408 Subsection Heading", PATHS.screenLarge]
    ],

    "cdr-text-heading-300": [
        [PATHS.contextualUsages, "407 Sub-subsection Heading", PATHS.screenSmall]
    ],
    // "cdr-text-heading-400": []

    "cdr-text-display-800": [
        [PATHS.contextualUsages, "809 Headline", PATHS.screenSmall],
    ],
    "cdr-text-display-900": [
        [PATHS.contextualUsages, "809 Headline", PATHS.screenLarge],
    ],

    // "cdr-text-subheading-400" : []
    "cdr-text-subheading-500": [
        [PATHS.contextualUsages, "808 Subheadline", PATHS.screenLarge],
    ],

    // "cdr-text-label-100": [ // doesn't exist yet
    //     [PATHS.contextualUsages, "Heading Label"],
    // ],

}
