import type { Theme } from "@owlbear-rodeo/sdk";
import { createTheme } from "@mui/material";

export function getTheme(theme?: Theme) {
    return createTheme({
        palette: theme ? {
            mode: theme.mode === "LIGHT" ? "light" : "dark",
            text: theme.text,
            primary: theme.primary,
            secondary: theme.secondary,
            background: theme?.background
        } : undefined,
        shape: {
            borderRadius: 16,
        },
        components: {
            MuiButtonBase: {
                defaultProps: {
                    disableRipple: true,
                }
            }
        }
    })
}