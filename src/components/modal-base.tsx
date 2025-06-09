import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import OBR from "@owlbear-rodeo/sdk";
import { useMemo, type FormEventHandler } from "react";
import { useSearchParams } from "wouter";

import { TARGET } from "~/lib/const";

type Props = {
  title: string;
  onAction: (ids: string[], value: number) => void;
};

export function ModalBase({ title, onAction }: Props) {
  const [params] = useSearchParams();

  const ids = useMemo(() => {
    const ids = params.get("ids");
    return ids ? ids.split(",") : [];
  }, [params]);

  const handleClose = () => {
    OBR.modal.close(TARGET.MODAL);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!event.currentTarget) return;

    const data = new FormData(event.currentTarget);
    const _amount = data.get("amount");
    if (typeof _amount !== "string") return;

    const amount = _amount.length > 0 ? parseInt(_amount) : 0;
    onAction(ids, amount);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          name="amount"
          label="Amount"
          autoFocus
          margin="dense"
          fullWidth
          variant="standard"
          autoComplete="off"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Adjust</Button>
      </DialogActions>
    </form>
  );
}
