import { Box, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface ModalProps {
    languages: string[];
    handleChange (e:ChangeEvent) :void
}
function Modal({languages, handleChange} : ModalProps) {
    return (
        <Box rounded={5}>
            <Input variant="filled" placeholder="Recherchez une langue" onChange={handleChange}/>
            <UnorderedList style={{columnCount : 7}} m={0} py={5}>
                {languages.map(language => <ListItem listStyleType="none" padding={1} _hover={{bgColor : 'gray.100'}}>{language}</ListItem>)}
            </UnorderedList>
        </Box>
    );
}

export default Modal;