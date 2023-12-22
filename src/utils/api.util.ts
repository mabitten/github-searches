/**
 * Inicialize todas as instâncias possíveis do fetch que possamos precisar para consultar APIs.
 * @returns Um objeto com todas as instâncias
 */
const getInstances = () => {
    return {
        /**
         * Instancia para requisições get e post
         */
        restInstance: async (url: string) =>
            await fetch(`${import.meta.env.VITE_BASE_URL}/${url}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            }),
    };
};

export const { restInstance } = getInstances();
