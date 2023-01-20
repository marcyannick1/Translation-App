import { Button, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import * as Md from "react-icons/md";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex p={5} alignItems="center">
            <Icon as={Md.MdTranslate} fontSize={25} />
            <Text fontWeight="medium" fontSize="1.2em" ml={2}>
                Translate
            </Text>
            <div style={{ marginLeft: "auto" }}>
                <Button onClick={toggleColorMode}>
                    {colorMode === "dark" ? (
                        <Icon as={Md.MdOutlineLightMode} />
                    ) : (
                        <Icon as={Md.MdOutlineDarkMode} />
                    )}
                </Button>
            </div>
        </Flex>
    );
}

export default Navbar;
