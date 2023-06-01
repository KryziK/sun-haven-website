import ControlledSwitch from "../Shared/ControlledSwitch";
import SearchBox from "../Shared/SearchBox";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {
  searchValue?: string;
  onSearchChange: (text: string) => void;
  compactValue: boolean;
  onCompactChange: (checked: boolean) => void;
};

const SearchToolbar = ({ searchValue, onSearchChange, compactValue, onCompactChange }: Props) => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="center" justifyContent="center">
      <Grid xs="auto">
        <Box borderRadius={1} border="1px solid rgba(255, 255, 255, .3)" paddingX={1}>
          <Stack direction="row" spacing={1} justifyContent="flex-end" height="38px">
            <Stack>
              <Box height="50%" display="flex" alignItems="center" justifyContent="flex-end"><Typography fontSize="12px" variant="body2" align="right" fontWeight="bold">Game Version</Typography></Box>
              <Box height="50%" display="flex" alignItems="center" justifyContent="flex-end"><Typography fontSize="12px" variant="body2" align="right" fontWeight="bold">Item Count</Typography></Box>
            </Stack>
            <Stack>
              <Box height="50%" display="flex" alignItems="center"><Typography fontSize="12px" variant="caption">1.1.0f</Typography></Box>
              <Box height="50%" display="flex" alignItems="center"><Typography fontSize="12px" variant="caption">4,715</Typography></Box>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid xs={12} md={6}>
        <SearchBox initialValue={searchValue} onChange={text => onSearchChange(text)} />
      </Grid>
      <Grid>
        <ControlledSwitch label="Compact" initialValue={compactValue} onChange={checked => onCompactChange(checked)} />
      </Grid>
    </Grid>
  );
};

export default SearchToolbar;