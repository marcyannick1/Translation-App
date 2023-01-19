import {Flex, Icon, Input} from "@chakra-ui/react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";

interface SelectLanguageProps {
    type :string
    showModal :boolean
    handleChange() :void
}

function SelectLanguage({type, showModal, handleChange} : SelectLanguageProps) {

    return (
        <Flex align="center" rounded={5} cursor="pointer" onClick={handleChange}>
            <Input value={type} variant='unstyled' cursor="pointer"/>
            {!showModal ? <Icon as={BiChevronDown}/> : <Icon as={BiChevronUp}/>}
        </Flex>
    );
}

export default SelectLanguage;