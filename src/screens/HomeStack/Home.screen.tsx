import { useEffect, useState } from "react";

import { Search } from "@/components/Form";
import { ErrorSearch } from "@/components/Errors";
import { UserDetail } from "@/screens/HomeStack/components";
import { useUserProfile } from "@/services/hooks";
import { LoadingSpinner } from "@/components/Loadings";
import { t } from "i18next";

/**
 * Exibe a tela de home
 */
export const HomeScreen = () => {
    const [username, setUsername] = useState<string>("");
    const { data: userData, isLoading, isFetching, refetch } = useUserProfile(username);

    /**
     * Callback para armazenar string username do usuário
     */
    const userNameCallback = (queryString: string) => {
        setUsername(queryString);
    };

    useEffect(() => {
        void refetch();
    }, [username]);

    return (
        <div className="d-flex flex-column align-items-center p-3 pt-5 centered p-0">
            <div className="card col-xl-4 p-0">
                <h5 className="card-header">{t("home.title")}</h5>
                <div className="card-body">
                    <h5 className="card-title">{t("home.search_title")}</h5>
                    <Search onClick={userNameCallback} placeholder="Digite um repositório" />
                </div>
            </div>
            {userData && !(isLoading || isFetching) ? (
                <UserDetail {...userData} />
            ) : (
                <div className="mt-3">
                    <LoadingSpinner isLoading={isLoading || isFetching} />
                </div>
            )}
            {userData?.login === undefined && userData !== null && <ErrorSearch />}
        </div>
    );
};

export default HomeScreen;
