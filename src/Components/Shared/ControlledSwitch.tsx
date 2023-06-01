import { FormControlLabel, Switch } from "@mui/material";
import { useCallback, useState } from "react";

type Props = {
  label: string;
  initialValue?: boolean;
  onChange: (checked: boolean) => void;
};

const ControlledSwitch = ({ label, initialValue, onChange }: Props) => {
  const [checked, setChecked] = useState(initialValue ?? false);

  const onChanged = useCallback((checked: boolean) => {
    setChecked(checked);
    onChange(checked);
  }, [onChange]);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={e => onChanged(e.target.checked)}
        />
      }
      label={label}
    />
  );
};

export default ControlledSwitch;