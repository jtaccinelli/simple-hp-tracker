import { type ReactNode } from "react";

import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type Props = {
  subtitle?: string;
  action?: ReactNode;
};

export function Header({ subtitle, action }: Props) {
  return (
    <>
      <CardHeader
        title="HP Tracker"
        action={action}
        slotProps={{
          title: {
            sx: {
              fontSize: "1.125rem",
              fontWeight: "bold",
              lineHeight: "32px",
              color: "text.primary",
            },
          },
          action: {
            sx: {
              alignSelf: "center",
            },
          },
        }}
      />
      <Divider variant="middle" />
      {subtitle && (
        <Typography
          variant="caption"
          sx={{
            px: 2,
            py: 1,
            display: "inline-block",
            color: "text.secondary",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </>
  );
}
