import { Alert, AlertTitle } from "@mui/material";
import { isRouteErrorResponse } from "react-router-dom";

const ErrorBlock = ({ error }: { error: unknown }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Oops!</AlertTitle>
      An error has occurred! Please try again.
      {isRouteErrorResponse(error) &&
        <>
          <br />
          {error.status} - {error.statusText}
        </>}
    </Alert>
  );
};

export default ErrorBlock;