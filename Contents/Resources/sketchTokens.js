module.exports = {

    // SHADOWS //
    prominence: [
        [
            {
                name: 'cdr-prominence-00',
                value: []
            },
            {
                name: 'cdr-prominence-10',
                value: [
                    {
                        color: '#00000022',
                        x: 0,
                        y: 0,
                        blur: 4,
                    },
                    {
                        color: '#00000011',
                        x: 0,
                        y: 2,
                        blur: 4,
                    },
                ]
            },
            {
                name: 'cdr-prominence-20',
                value: [
                    {
                        color: '#00000022',
                        x: 0,
                        y: 2,
                        blur: 4,
                    },
                    {
                        color: '#00000011',
                        x: 0,
                        y: 3,
                        blur: 9,
                    },
                ]
            },
            {
                name: 'cdr-prominence-30',
                value: [
                    {
                        color: '#00000022',
                        x: 0,
                        y: 4,
                        blur: 8,
                    },
                    {
                        color: '#00000011',
                        x: 0,
                        y: 4,
                        blur: 16,
                    },
                ]
            },
            {
                name: 'cdr-prominence-40',
                value: [
                    {
                        color: '#00000022',
                        x: 0,
                        y: 8,
                        blur: 16,
                    },
                    {
                        color: '#00000011',
                        x: 0,
                        y: 5,
                        blur: 25,
                    },
                ]
            },

        ]
    ],

    // TYPOGRAPHY //
    text: [

        // HEADINGS //
        {
            name: 'cdr-text-heading-800',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 48,
                lineHeight: 60,
                spacing: 0.01,
            },
        },
        {
            name: 'cdr-text-heading-700',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 38,
                lineHeight: 48,
                spacing: 0.0075,
            },
        },
        {
            name: 'cdr-text-heading-600',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 32,
                lineHeight: 40,
                spacing: 0.005,
            },
        },
        {
            name: 'cdr-text-heading-500',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 28,
                lineHeight: 32,
                spacing: -0.0025,
            },
        },
        {
            name: 'cdr-text-heading-400',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 24,
                lineHeight: 32,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-heading-300',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 20,
                lineHeight: 26,
                spacing: 0.005,
            },
        },
        {
            name: 'cdr-text-heading-200',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 18,
                lineHeight: 24,
                spacing: 0.01,
            },
        },
        {
            name: 'cdr-text-heading-100',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 10,
                fontSize: 14,
                lineHeight: 20,
                spacing: 0.015,
            },
        },

        // SUBHEADING ?? //

        // DAT BOD //
        {
            name: 'cdr-text-body-400',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 6,
                fontSize: 20,
                lineHeight: 32,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-body-300',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 6,
                fontSize: 18,
                lineHeight: 28,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-body-200',
            value: {
                fontFamily: 'REI Stuart App',
                fontWeight: 6,
                fontSize: 16,
                lineHeight: 24,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-body-sans-400',
            value: {
                fontFamily: 'Graphik App',
                fontWeight: 6,
                fontSize: 20,
                lineHeight: 32,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-body-sans-300',
            value: {
                fontFamily: 'Graphik App',
                fontWeight: 6,
                fontSize: 18,
                lineHeight: 28,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-body-sans-200',
            value: {
                fontFamily: 'Graphik App',
                fontWeight: 6,
                fontSize: 16,
                lineHeight: 24,
                spacing: 0,
            },
        },
        {
            name: 'cdr-text-body-sans-100',
            value: {
                fontFamily: 'Graphik App',
                fontWeight: 6,
                fontSize: 14,
                lineHeight: 20,
                spacing: 0,
            },
        },

        // UTIL //
        {
            name: 'cdr-text-heading-label-150',
            value: {
                fontFamily: 'Graphik App',
                fontWeight: 8,
                fontSize: 12,
                lineHeight: 16,
                spacing: 0,
                textTransform: 'uppercase',
            },
        },
    ],

    // COLORS //
    colors: [
        {
            name: "cdr-color-text-primary-lightmode",
            type: "text",
            value: "#292929",
        },
        {
            name: "cdr-color-text-primary-darkmode",
            type: "text",
            value: "#fafafa",
        },
        {
            name: "cdr-color-text-secondary-lightmode",
            type: "text",
            value: "#616161",
        },
        {
            name: "cdr-color-text-secondary-darkmode",
            type: "text",
            value: "#999999",
        },
        {
            name: "cdr-color-text-disabled-lightmode",
            type: "text",
            value: "#b8b8b8",
        },
        {
            name: "cdr-color-text-disabled-darkmode",
            type: "text",
            value: "#616161",
        },
        {
            name: "cdr-color-text-link-lightmode",
            type: "text",
            value: "#3278ae",
        },
        {
            name: "cdr-color-text-link-darkmode",
            type: "text",
            value: "#5197cd",
        },
        {
            name: "cdr-color-text-error-lightmode",
            type: "text",
            value: "#b5292b",
        },
        {
            name: "cdr-color-text-error-darkmode",
            type: "text",
            value: "#e86868",
        },
        {
            name: "cdr-color-text-form-label-lightmode",
            type: "text",
            value: "#292929",
        },
        {
            name: "cdr-color-text-form-label-darkmode",
            type: "text",
            value: "#fafafa",
        },
        {
            name: "cdr-color-text-form-placeholder-lightmode",
            type: "text",
            value: "#616161",
        },
        {
            name: "cdr-color-text-form-placeholder-darkmode",
            type: "text",
            value: "#999999",
        },
        {
            name: "cdr-color-text-form-disabled-lightmode",
            type: "text",
            value: "#b8b8b8",
        },
        {
            name: "cdr-color-text-form-disabled-darkmode",
            type: "text",
            value: "#616161",
        },
        {
            name: "cdr-color-icon-primary-lightmode",
            type: "icon",
            value: "#616161",
        },
        {
            name: "cdr-color-icon-primary-darkmode",
            type: "icon",
            value: "#999999",
        },
        {
            name: "cdr-color-icon-emphasis-lightmode",
            type: "icon",
            value: "#292929",
        },
        {
            name: "cdr-color-icon-emphasis-darkmode",
            type: "icon",
            value: "#fafafa",
        },
        {
            name: "cdr-color-background-dark",
            type: "background",
            value: "#292929",
        },
        {
            name: "cdr-color-background-darker",
            type: "background",
            value: "#1a1a1a",
        },
        {
            name: "cdr-color-background-light",
            type: "background",
            value: "#f7f7f7",
        },
        {
            name: "cdr-color-background-lighter",
            type: "background",
            value: "#fafafa",
        },
        {
            name: "cdr-color-background-lightest",
            type: "background",
            value: "#ffffff",
        },
        {
            name: "cdr-color-background-form-lightmode",
            type: "background",
            value: "#ffffff",
        },
        {
            name: "cdr-color-background-form-darkmode",
            type: "background",
            value: "#292929",
        },
        {
            name: "cdr-color-background-form-input-lightmode",
            type: "background",
            value: "#ffffff",
        },
        {
            name: "cdr-color-background-form-input-darkmode",
            type: "background",
            value: "#292929",
        },
        {
            name: "cdr-color-border-primary-lightmode",
            type: "border",
            value: "#616161",
        },
        {
            name: "cdr-color-border-primary-darkmode",
            type: "border",
            value: "#fafafa",
        },
        {
            name: "cdr-color-border-secondary-lightmode",
            type: "border",
            value: "#b8b8b8",
        },
        {
            name: "cdr-color-border-secondary-darkmode",
            type: "border",
            value: "#999999",
        },
        {
            name: "cdr-color-border-disabled-lightmode",
            type: "border",
            value: "#dadada",
        },
        {
            name: "cdr-color-border-disabled-darkmode",
            type: "border",
            value: "#dadada",
        },
        {
            name: "cdr-color-border-error-lightmode",
            type: "border",
            value: "#e86868",
        },
        {
            name: "cdr-color-border-selected-lightmode",
            type: "border",
            value: "#2b6692",
        }
    ]

}
