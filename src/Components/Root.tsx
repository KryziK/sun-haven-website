import ErrorBlock from "./ErrorBlock";
import Footer from "./Footer";
import Header from "./Header";
import { Stack } from "@mui/material";
import { Outlet, useRouteError } from "react-router-dom";

const Root = () => {
  const error = useRouteError();

  return (
    <Stack alignItems="center" spacing={1}>
      <Header />
      {!error
        ? <Outlet />
        : <ErrorBlock error={error} />}
      <Footer />
    </Stack>
  );
};

export default Root;