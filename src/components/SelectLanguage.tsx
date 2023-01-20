import {Flex, Icon, Input} from "@chakra-ui/react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";

interface SelectLanguageProps {
    language :string
    showModal :boolean
    handleChange(type: any) :void;
}

function SelectLanguage({language, showModal, handleChange} : SelectLanguageProps) {
    return (
        <Flex align="center" rounded={5} cursor="pointer" onClick={handleChange}>
            <Input value={language} variant='unstyled' cursor="pointer"/>
            {!showModal ? <Icon as={BiChevronDown}/> : <Icon as={BiChevronUp}/>}
        </Flex>
    );
}

export default SelectLanguage;