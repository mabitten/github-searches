import { useState, type KeyboardEvent } from "react";
import { Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

type TSearchComponent = {
    onClick: (queryString: string) => void;
    placeholder?: string;
};

/**
 * Exibe conteúdo de busca em um formulário, contendo input e um button.
 *
 * @returns JSX.Element
 */
export const SearchComponent = ({ onClick, placeholder }: TSearchComponent) => {
    const [textInput, setTextInput] = useState<string>("");

    /**
     *
     */
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            onClick(textInput);
            e.preventDefault();
        }
    };

    return (
        <form className="row">
            <input
                type="text"
                className="form-control"
                onChange={(event) => {
                    setTextInput(event.target.value);
                }}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
            />
            <div className="mt-2" />
            <Button variant="primary" onClick={() => onClick(textInput)}>
                Pesquisar <ArrowRight />
            </Button>
        </form>
    );
};

export default SearchComponent;
