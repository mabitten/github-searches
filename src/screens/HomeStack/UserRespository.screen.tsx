import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { EnumFilterRepository, type TRepositoryInfo } from "@/types";
import { format } from "date-fns";
import { Button, Modal } from "react-bootstrap";
import { LoadingSpinner } from "@/components/Loadings";
import { useUserRepositories } from "@/services/hooks";
import { sortbyStart } from "@/utils";
import { t } from "i18next";

/**
 * Tela de visualização dos repositórios do usuário.
 */
export const UserRepositoryScreen = () => {
    const { username } = useParams();
    const { data: userRepositories, isLoading, isFetching } = useUserRepositories(username);

    const [selectedRepo, setSelectedRepo] = useState<TRepositoryInfo | null>(null);
    const [filter, setFilter] = useState<string>(EnumFilterRepository.DESC);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    /**
     * Manipula a interação com o modal.
     * @param {number} [repoId] - O ID do repositório a ser selecionado para o modal.
     */
    const handleModal = (repoId?: number) => {
        const selectedRepository = userRepositories?.find((repo) => repo.id === repoId);

        setSelectedRepo(selectedRepository ?? null);
        setShowModal(!showModal);
    };

    const reposFiltered = userRepositories ? sortbyStart(userRepositories, filter) : null;

    /**
     * Função de voltar para home
     */
    const goBack = (): void => {
        navigate("/");
    };

    if (isLoading || isFetching) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100 ">
                <LoadingSpinner isLoading={true} />
            </div>
        );
    }

    return (
        <div className="py-3">
            <div className="d-flex gap-2">
                <Button onClick={goBack}>{t("home.user_repository.back")}</Button>
                <div className="form-floating w-100">
                    <select
                        id="floatingSelect"
                        className="form-select"
                        onChange={(event) => {
                            setFilter(event.target.value);
                        }}
                        aria-label="Default select example">
                        <option selected value={EnumFilterRepository.DESC}>
                            {t("home.user_repository.filter.a")}
                        </option>
                        <option value={EnumFilterRepository.ASC}>
                            {t("home.user_repository.filter.b")}
                        </option>
                    </select>
                    <label htmlFor="floatingSelect">{t("home.user_repository.filter.title")}</label>
                </div>
            </div>

            <ul className="list-group mt-2">
                {reposFiltered?.map((repo) => (
                    <li className="list-group-item" key={repo.id}>
                        <p>
                            {t("home.user_repository.repository")}{" "}
                            <span className="text-success">{repo.name}</span>
                        </p>
                        <p>
                            {t("home.user_repository.created_at")}{" "}
                            {format(repo.created_at ?? new Date(), "MM/dd/yyyy")}
                        </p>
                        <p>
                            {t("home.user_repository.stars")} {repo.stargazers_count}
                        </p>
                        <div className="d-flex gap-2 align-items-center">
                            <Button
                                onClick={() => {
                                    handleModal(repo.id);
                                }}>
                                {t("home.user_repository.see_more")}
                            </Button>
                            <a href={repo.svn_url} target="_blank" rel="noreferrer">
                                {t("home.user_repository.see_repository")}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>

            <Modal show={showModal} onHide={() => handleModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedRepo?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {t("home.user_repository.description")} {selectedRepo?.description}
                    </p>
                    <p>
                        {t("home.user_repository.stars")} {selectedRepo?.stargazers_count}
                    </p>
                    {selectedRepo?.language ? (
                        <p>
                            {t("home.user_repository.language")} {selectedRepo?.language}
                        </p>
                    ) : (
                        <></>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModal()}>
                        {t("home.user_repository.close")}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserRepositoryScreen;
