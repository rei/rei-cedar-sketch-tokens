import { PATHS } from "../Partials/constants";

const titleFolder = "Title"

// TODO:
// its not ideal for this plugin to know about specific tokens its consuming.
// this list might need to be in the token repo ?
export default {

    "cdr-text-heading-700": [
        [PATHS.contextualUsages + ' ' + PATHS.title, "Page Title", PATHS.screenSmall],
        [PATHS.contextualUsages + ' ' + PATHS.heading, "Section Heading", PATHS.screenLarge]
    ],
    "cdr-text-heading-800": [
        [PATHS.contextualUsages + ' ' + PATHS.title, "Page Title", PATHS.screenLarge]
    ],

    "cdr-text-subheading-300": [
        [PATHS.contextualUsages + ' ' + PATHS.title, "Subtitle", PATHS.screenSmall]
    ],
    "cdr-text-subheading-400": [
        [PATHS.contextualUsages + ' ' + PATHS.title, "Subtitle", PATHS.screenLarge],
        [PATHS.contextualUsages + ' ' + PATHS.headline, "Subheadline", PATHS.screenSmall]
    ],

    "cdr-text-heading-600": [
        [PATHS.contextualUsages + ' ' + PATHS.heading, "Section Heading", PATHS.screenSmall]
    ],
    // "cdr-text-heading-700" : []

    "cdr-text-heading-400": [
        [PATHS.contextualUsages + ' ' + PATHS.heading, "Subsection Heading", PATHS.screenSmall],
        [PATHS.contextualUsages + ' ' + PATHS.heading, "Sub-subsection Heading", PATHS.screenLarge]
    ],
    "cdr-text-heading-500": [
        [PATHS.contextualUsages + ' ' + PATHS.heading, "Subsection Heading", PATHS.screenLarge]
    ],

    "cdr-text-heading-300": [
        [PATHS.contextualUsages + ' ' + PATHS.heading, "Sub-subsection Heading", PATHS.screenSmall]
    ],
    // "cdr-text-heading-400": []

    "cdr-text-display-800": [
        [PATHS.contextualUsages + ' ' + PATHS.headline, "Headline", PATHS.screenSmall],
    ],
    "cdr-text-display-900": [
        [PATHS.contextualUsages + ' ' + PATHS.headline, "Headline", PATHS.screenLarge],
    ],

    // "cdr-text-subheading-400" : []
    "cdr-text-subheading-500": [
        [PATHS.contextualUsages + ' ' + PATHS.headline, "Subheadline", PATHS.screenLarge],
    ],

    // "cdr-text-label-100": [ // doesn't exist yet
    //     [PATHS.contextualUsages + ' ' +  "Heading Label"],
    // ],

}
