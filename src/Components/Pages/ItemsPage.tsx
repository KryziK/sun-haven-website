import SearchToolbar from "./SearchToolbar";
import usePageTitle from "../../Hooks/usePageTitle";
import GridContainer from "../Shared/GridContainer";
import { Box, Chip, Paper, Skeleton, Stack, SxProps, Theme, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback } from "react";
import { BooleanParam, StringParam, useQueryParams, withDefault } from "use-query-params";

type Props = {
  sx?: SxProps<Theme>;
};

const ItemCard = ({ sx }: Props) => {
  return (
    <Paper sx={[{ display: "flex", p: 1 }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Stack direction="column" alignItems="center" spacing={1} width={86} maxHeight={86}>
        <Skeleton variant="rounded" height={64} width={64} />
        <Chip variant="outlined" size="small" label="ItemQuality" />
      </Stack>
      <Stack pl={1}>
        <Typography variant="subtitle1" noWrap>Item Name</Typography>
      </Stack>
    </Paper>
  );
};

const ItemsPage = () => {
  usePageTitle("Items");

  const [query, setQuery] = useQueryParams({
    search: withDefault(StringParam, ""),
    compact: withDefault(BooleanParam, false)
  }, { removeDefaultsFromUrl: true });

  const updateSearchUrl = useCallback((search: string) => setQuery({ search }), [setQuery]);
  const updateCompactUrl = useCallback((compact: boolean) => setQuery({ compact }), [setQuery]);

  return (
    <Box width="90%">
      <Stack spacing={1}>
        <SearchToolbar searchValue={query.search} onSearchChange={updateSearchUrl} compactValue={query.compact} onCompactChange={updateCompactUrl} />
        <GridContainer>
          {[...Array(10).keys()].map(i => <Grid xs={12} md={6} lg={3} key={i}>
            <ItemCard />
          </Grid>)}
        </GridContainer>
      </Stack>
    </Box>
  );
};

export default ItemsPage;