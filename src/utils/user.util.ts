import { type TRepositoryInfo } from "@/types";

/**
 * Ordena os repositórios com base na contagem de estrelas.
 * @param {TRepositoryInfo[]} repositories - Lista de repositórios a ser ordenada.
 * @param {string} sortOrder - A ordem de classificação, "asc" para ascendente, "desc" para descendente.
 * @returns {TRepositoryInfo[]} - Lista de repositórios ordenada.
 */
export const sortbyStart = (repositories: TRepositoryInfo[], sortOrder: string) => {
    return repositories.sort((a, b) => {
        const order = sortOrder === "asc" ? 1 : -1;
        return order * (a.stargazers_count - b.stargazers_count);
    });
};
