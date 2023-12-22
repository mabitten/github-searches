import { FadeLoader } from "react-spinners";

/**
 * Spinner loading
 *
 * @param isLoading boolean
 */
export const LoadingSpinnerComponent = ({ isLoading = false }: { isLoading: boolean }) => {
    return <>{isLoading ? <FadeLoader color="#36d7b7" /> : null}</>;
};

export default LoadingSpinnerComponent;
