import { getUserProfile } from "@/services";
import { queryKeys } from "@/services/hooks";
import { useQuery } from "@tanstack/react-query";

/**
 * Retorna os dados completo do repositório do usuário
 */
export const useUserProfile = (username = "") => {
    return useQuery(queryKeys.userProfile, {
        enabled: username.length > 0,
        /**
         * Retorno de erro
         * #TODO: adicionar modo dev
         */
        onError: (error) => {
            console.log("useUserProfile: ", error);
        },
        /**
         * Retornar usuario logado
         */
        queryFn: async () => {
            if (username) {
                const user = await getUserProfile(username);
                return user;
            }

            return null;
        },
        retry: 1,
    });
};
