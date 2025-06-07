import {
  Button,
  Card,
  CardActions,
  CardHeader,
  TextField,
} from "@mui/material";
import OBR from "@owlbear-rodeo/sdk";
import { useMemo, useState, type ChangeEvent } from "react";
import { useSearchParams } from "wouter";
import { PLUGIN_ID } from "~/lib/plugin";

type Props = {
  title: string;
  cta: string;
  onAction: (ids: string[], value: number) => void;
};

export function ModalUpdate({ title, cta, onAction }: Props) {
  const [params] = useSearchParams();

  const ids = useMemo(() => {
    const ids = params.get("ids");
    return ids ? ids.split(",") : [];
  }, [params]);

  const [amount, setAmount] = useState(0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const value = inputValue.length > 0 ? parseInt(inputValue) : 0;
    setAmount(value);
  }

  function handleUpdate() {
    onAction(ids, amount);
    OBR.modal.close(PLUGIN_ID.MODAL);
  }

  return (
    <Card sx={{ height: "200px", width: "300px", alignItems: "start" }}>
      <CardHeader title={title} />
      <CardActions>
        <TextField label="Amount" value={amount} onChange={handleChange} />
      </CardActions>
      <CardActions>
        <Button onClick={handleUpdate}>{cta}</Button>
      </CardActions>
    </Card>
  );
}
