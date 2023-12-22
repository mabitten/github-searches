import App from "@/App";
import { HomeScreen, UserRepositoryScreen } from "@/screens/HomeStack";
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
            {
                path: "/repos/:username",
                element: <UserRepositoryScreen />,
            },
        ],
    },
]);
