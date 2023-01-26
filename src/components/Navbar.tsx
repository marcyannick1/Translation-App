import { Button, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import {MdTranslate, MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex p={5} alignItems="center">
            <Icon as={MdTranslate} fontSize={25} />
            <Text fontWeight="medium" fontSize="1.2em" ml={2}>
                Translate
            </Text>
            <div style={{ marginLeft: "auto" }}>
                <Button onClick={toggleColorMode}>
                    {colorMode === "dark" ? (
                        <Icon as={MdOutlineLightMode} />
                    ) : (
                        <Icon as={MdOutlineDarkMode} />
                    )}
                </Button>
            </div>
        </Flex>
    );
}

export default Navbar;
