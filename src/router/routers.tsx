import App from "@/App";
import { HomeScreen } from "@/screen/HomeStack";
import { createBrowserRouter } from "react-router-dom";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
]);
