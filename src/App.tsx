import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

import "@/assets/translations/translation";

const queryClient = new QueryClient();

/**
 * Exibe o App com as dependências necessárias
 */
export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-vh-100 bg-secondary">
                <Container>
                    <Outlet />
                </Container>
            </div>
        </QueryClientProvider>
    );
};

export default App;
