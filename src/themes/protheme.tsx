import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import {Inter} from "@next/font/google";

export const inter = Inter({
    subsets: ['latin'],
    variable: '--inter-font',
})

export const theme = extendTheme(
    {
        colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
        fonts: {
            body: "system-ui, sans-serif",
            heading: "Georgia, serif",
            mono: "Menlo, monospace",
        },
    },
    proTheme,
)
