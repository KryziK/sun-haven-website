import Footer from "./Footer";
import Header from "./Header";
import ErrorBlock from "./Shared/ErrorBlock";
import { Stack } from "@mui/material";
import { Outlet, useRouteError } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";

const Root = () => {
  const error = useRouteError();

  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <Stack alignItems="center" spacing={1}>
        <Header />
        {!error
          ? <Outlet />
          : <ErrorBlock error={error} />}
        <Footer />
      </Stack>
    </QueryParamProvider>
  );
};

export default Root;