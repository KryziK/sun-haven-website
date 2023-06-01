import PromoLinks from "./Shared/PromoLinks";
import { AppBar, Box, Container, Stack, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" mr={2}>{import.meta.env.VITE_APP_NAME}</Typography>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab component={NavLink} to="/Items" label="Items" />
          </Tabs>
          <Box flexGrow={1} />
          <PromoLinks />
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;