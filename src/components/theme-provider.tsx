import { useCallback, useEffect, useState, type ReactNode } from "react"
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

import type { Theme } from "@owlbear-rodeo/sdk";
import OBR from "@owlbear-rodeo/sdk";

import { getTheme } from "~/lib/theme";

type Props = {
    children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
    const [theme, setTheme] = useState(() => getTheme())

    const updateTheme = useCallback((theme: Theme) => {
        setTheme(() => {
            return getTheme(theme)
        })
    }, [])

    useEffect(() => {
        OBR.theme.getTheme().then(updateTheme)
        return OBR.theme.onChange(updateTheme)
    }, [])

    return <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
}