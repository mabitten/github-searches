import { type TSingleUser } from "@/types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

/**
 * Exibe informações do repositório do usuário
 */
const UserDetailComponent = ({
    avatar_url,
    login,
    followers,
    following,
    email,
    bio,
}: TSingleUser) => {
    const navigate = useNavigate();

    if (!login) {
        return <></>;
    }

    /**
     * Move usuário para página de repositório
     */
    const goToRepository = (): void => {
        navigate(`/repos/${login}`);
    };

    return (
        <div className="card col-xl-4 mt-3 p-3">
            <div className="">
                <div className=" text-center">
                    <img
                        className="img-fluid rounded img-thumbnail w-25"
                        src={avatar_url}
                        alt={login}
                    />
                    <h2>{login}</h2>
                </div>
                <div>
                    {email ? (
                        <p>
                            {t("home.user_detail.email")} {email}
                        </p>
                    ) : (
                        <></>
                    )}
                    <p>{bio}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>
                                {t("home.user_detail.followers")} {followers}
                            </p>
                        </div>
                        <div>
                            <p>
                                {t("home.user_detail.following")} {following}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={goToRepository} variant="primary">
                {t("home.user_detail.button_repositories")}
            </Button>
        </div>
    );
};

export default UserDetailComponent;
