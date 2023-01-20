import { Button, Center, Flex} from "@chakra-ui/react";
import SelectLanguage from "./components/SelectLanguage";
import TextBox from "./components/TextBox";
import Modal from "./components/Modal";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { TbSwitchHorizontal } from "react-icons/tb";

function App() {
    const [inputLanguage, setInputLanguage] = useState<string>('Français')
    const [outputLanguage, setOutputLanguage] = useState<string>('Anglais')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [languages, setLanguages] = useState<string[]>([])
    const [filterLanguages, setFilterLanguages] = useState<string[]>([])

    interface Language {
        language: string;
        name: string;
    }
    
    const getLanguages = async(): Promise<string[]> => {
        const options = {
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
            params: {target: 'fr'},
            headers: {
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': import.meta.env.RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
        };
          
        let data: string[] = []

        await axios.request(options).then(function (response) {
            response.data.data.languages.forEach((language : Language) => {
                data.push(language.name)
            });
        }).catch(function (error) {
            console.error(error);
        });

        return data
    }

    const languageSwitch = ()=>{
        setInputLanguage(outputLanguage)
        setOutputLanguage(inputLanguage)
    }

    const toggleShowModal = () => {
        setShowModal(!showModal)
    }

    const filterLang = (e:ChangeEvent) =>{
        setFilterLanguages(languages.filter(language => language.toLocaleLowerCase().includes(e.target.value.toLowerCase())))
    }

    useEffect(()=>{
        getLanguages()
        .then((res)=>{
            setLanguages(res)
            setFilterLanguages(res)
        })
    }, [])

    return (
        <Center>
            <Flex width="70%" direction="column">
                <Flex gap={4}>
                    <Flex direction='column' gap={5} w="50%">
                        <SelectLanguage language={inputLanguage} showModal={showModal} handleChange={toggleShowModal}/>
                        {!showModal && <TextBox type="Input"/> }
                    </Flex>
                    <Button rounded="full" p={1} onClick={languageSwitch}>
                        <TbSwitchHorizontal size={15}/>
                    </Button>
                    <Flex direction='column' gap={5} w="50%">
                        <SelectLanguage language={outputLanguage} showModal={showModal} handleChange={toggleShowModal}/>
                        {!showModal && <TextBox type="Output"/> }
                    </Flex>
                </Flex>
                {showModal && <Modal handleChange={filterLang} languages = {filterLanguages}/>}
            </Flex>
        </Center>
    );
}

export default App;