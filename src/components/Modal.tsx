import { Box, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { Language } from "../App";

interface ModalProps {
    languages: Language[];
    searchInputValue: string;
    handleChange(e: ChangeEvent): void;
    handleClick(e: any): void;
    selectedLanguage: string;
}

function Modal({
    languages,
    searchInputValue,
    handleChange,
    handleClick,
    selectedLanguage,
}: ModalProps) {
    return (
        <Box rounded={5}>
            <Input
                variant="filled"
                placeholder="Recherchez une langue"
                value={searchInputValue}
                onChange={handleChange}
            />
            <UnorderedList style={{ columnCount: 6 }} m={0} py={5}>
                {languages.map((language) => (
                    <ListItem
                        listStyleType="none"
                        cursor="pointer"
                        rounded={4}
                        padding={1}
                        bgColor={
                            language.name === selectedLanguage ? "gray.100" : ""
                        }
                        _hover={{ bgColor: "gray.100" }}
                        onClick={handleClick}
                    >
                        {language.name}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}

export default Modal;