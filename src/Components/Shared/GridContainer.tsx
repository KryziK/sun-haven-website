import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {
  children: React.ReactNode;
};

const GridContainer = ({ children }: Props) => {
  return (
    <Paper elevation={6} sx={{ minHeight: "10em", padding: 2, boxShadow: "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.5)" }}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Paper>
  );
};

export default GridContainer;