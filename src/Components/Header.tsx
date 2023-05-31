import PromoLinks from "./PromoLinks";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div">Sun Haven</Typography>
          <Box flexGrow={1} />
          <PromoLinks />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;