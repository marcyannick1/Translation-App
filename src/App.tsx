import { Center, Flex} from "@chakra-ui/react";
import SelectLanguage from "./components/SelectLanguage";
import TextBox from "./components/TextBox";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
    const [showModal, setShowModal] = useState(false)

    const toggleShowModal = ()=>{
        setShowModal(!showModal)
    }
    return (
        <Center>
            <Flex width="70%" direction="column">
                <Flex gap={5}>
                    <Flex direction='column' gap={5} w="50%">
                        <SelectLanguage type="Input" showModal={showModal} handleChange={toggleShowModal}/>
                        {!showModal && <TextBox type="Input"/> }
                    </Flex>
                    <Flex direction='column' gap={5} w="50%">
                        <SelectLanguage type="Output" showModal={showModal} handleChange={toggleShowModal}/>
                        {!showModal && <TextBox type="Output"/> }
                    </Flex>
                </Flex>
                {showModal && <Modal />}
            </Flex>
        </Center>
    );
}

export default App;