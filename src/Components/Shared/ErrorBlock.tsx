import { Alert, AlertTitle, Typography } from "@mui/material";
import { isRouteErrorResponse } from "react-router-dom";

type Props = {
  error: unknown;
};

const ErrorBlock = ({ error }: Props) => {
  return (
    <Alert severity="error">
      <AlertTitle>Oops!</AlertTitle>
      <Typography>An error has occurred! Please try again.</Typography>
      {isRouteErrorResponse(error) && <Typography>{error.status} - {error.statusText}</Typography>}
    </Alert>
  );
};

export default ErrorBlock;