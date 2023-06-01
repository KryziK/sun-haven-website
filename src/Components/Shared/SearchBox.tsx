import { Search } from "@mui/icons-material";
import { debounce, InputAdornment, TextField } from "@mui/material";
import { useCallback, useMemo, useState } from "react";

type Props = {
  initialValue?: string;
  onChange: (text: string) => void;
};

const SearchBox = ({ initialValue, onChange }: Props) => {
  const [searchText, setSearchText] = useState(initialValue ?? "");

  const onDebounced = useMemo(() => debounce(onChange, 250), [onChange]);

  const onChangeDebounced = useCallback((text: string) => {
    setSearchText(text);
    onDebounced(text);
  }, [onDebounced]);

  return (
    <TextField
      autoFocus
      fullWidth
      placeholder="Search..."
      size="small"
      value={searchText}
      onChange={e => onChangeDebounced(e.target.value)}
      InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }}
    />
  );
};

export default SearchBox;