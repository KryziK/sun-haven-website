import Items from "./Components/Pages/Items";
import Root from "./Components/Root";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();
const router = createBrowserRouter([{
  element: <Root />,
  errorElement: <Root />,
  children: [
    {
      path: "/Items",
      element: <Items />
    },
    {
      index: true,
      element: <Navigate to="/Items" replace={true} />
    }
  ]
}]);

const darkTheme = createTheme({ palette: { mode: "dark" } });

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
