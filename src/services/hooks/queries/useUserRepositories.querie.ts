import { getUserRepositories } from "@/services";
import { queryKeys } from "@/services/hooks";
import { useQuery } from "@tanstack/react-query";

/**
 * Retorna os dados completo do repositório do usuário
 */
export const useUserRepositories = (username = "", enabled = false) => {
    return useQuery(queryKeys.userRepositories, {
        enabled: username.length > 0,
        /**
         * Retorno de erro
         * #TODO: adicionar modo dev
         */
        onError: (error) => {
            console.log("useUserProfile: ", error);
        },
        /**
         * Retornar repositorios do usuário
         */
        queryFn: async () => {
            if (username) {
                const repos = await getUserRepositories(username);
                return repos;
            }

            return null;
        },
        retry: 1,
    });
};
