import {
    Flex,
    Icon,
    Input
} from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp} from "react-icons/bi";
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
        <Flex
            align="center"
            rounded={5}
            mb={5}
            cursor="pointer"
            onClick={handleChange}
        >
            <Input value={language.name} variant="unstyled" cursor="pointer" />
            {showModal != type ? (
                <Icon as={BiChevronDown} fontSize={25} />
            ) : (
                <Icon as={BiChevronUp} fontSize={25} />
            )}
        </Flex>
    );
}

export default SelectLanguage;
