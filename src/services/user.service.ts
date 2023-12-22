import { sanitizerUser } from "@/sanitizers";
import { type TSingleUserResponse, type TRepositoryInfo, type TSingleUser } from "@/types";
import { restInstance } from "@/utils";

/**
 * Busca um usuário específico
 *
 * @param username Username do usuário a pesquisar
 * @returns {Promise<TSingleUser>} - Uma Promise que resolve para o retorno de informações do usuário.
 */
export const getUserProfile = async (username: string): Promise<TSingleUser> => {
    const response = await restInstance(`users/${username}`);
    const data: TSingleUserResponse = await response.json();

    return sanitizerUser(data);
};

/**
 * Obtém os repositórios de um usuário a partir do GitHub API.
 * @param {string} username - O nome de usuário do GitHub.
 * @returns {Promise<TRepositoryInfo[]>} - Uma Promise que resolve para a lista de repositórios do usuário.
 */
export const getUserRepositories = async (username: string): Promise<TRepositoryInfo[]> => {
    const response = await restInstance(`users/${username}/repos`);

    return response.json();
};
