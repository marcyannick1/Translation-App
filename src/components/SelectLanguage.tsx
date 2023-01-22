import { Button, Icon} from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Language } from "../App";

interface SelectLanguageProps {
    type: string;
    language: Language;
    showModal: null | string;
    handleChange(): void;
}

function SelectLanguage({
    type,
    language,
    showModal,
    handleChange,
}: SelectLanguageProps) {
    return (
        <Button
            rounded={5}
            mb={5}
            cursor="pointer"
            onClick={handleChange}
            border="ButtonFace"
            display="flex"
            justifyContent="space-between"
        >
            {language.name}
            {showModal != type ? (
                <Icon as={BiChevronDown} fontSize={25} />
            ) : (
                <Icon as={BiChevronUp} fontSize={25} />
            )}
        </Button>
    );
}

export default SelectLanguage;
