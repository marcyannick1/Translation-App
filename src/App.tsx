import { Button, Center, Flex } from "@chakra-ui/react";
import SelectLanguage from "./components/SelectLanguage";
import TextBox from "./components/TextBox";
import Modal from "./components/Modal";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { TbSwitchHorizontal } from "react-icons/tb";

export interface Language {
    language: string;
    name: string;
}

function App() {
    const [inputLanguage, setInputLanguage] = useState<Language>({
        language: "fr",
        name: "Français",
    });
    const [outputLanguage, setOutputLanguage] = useState<Language>({
        language: "en",
        name: "Anglais",
    });
    const [showModal, setShowModal] = useState<null | string>(null);
    const [languages, setLanguages] = useState<Language[]>([]);
    const [filterLanguages, setFilterLanguages] = useState<Language[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const [inputText, setInputText] = useState<string>("");
    const [outputText, setOutputText] = useState<string>("");

    const getLanguages = async (): Promise<Language[]> => {
        const options = {
            method: "GET",
            url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
            params: { target: "fr" },
            headers: {
                "Accept-Encoding": "application/gzip",
                "X-RapidAPI-Key": "",
                "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            },
        };

        let data: Language[] = [];

        await axios
            .request(options)
            .then(function (response) {
                response.data.data.languages.forEach((language: Language) => {
                    data.push(language);
                });
            })
            .catch(function (error) {
                console.error(error);
            });

        return data;
    };

    const languageSwitch = () => {
        setInputLanguage(outputLanguage);
        setOutputLanguage(inputLanguage);
        setInputText(outputText)
        setOutputText(inputText)
        setShowModal(null);
    };

    const toggleShowModal = (type: string) => {
        showModal ? setShowModal(null) : setShowModal(type);
    };

    const filterLang = (e: ChangeEvent) => {
        setFilterLanguages(
            languages.filter((language) =>
                language.name
                    .toLowerCase()
                    .includes(
                        (e.target as HTMLInputElement).value.toLowerCase()
                    )
            )
        );
        setSearchInput((e.target as HTMLInputElement).value);
    };

    const changeLanguage = (type: string, language: string) => {
        const key = languages.filter((lang) => lang.name.includes(language))[0]
            .language;
        type === "Input"
            ? setInputLanguage({ language: key, name: language })
            : setOutputLanguage({ language: key, name: language });
        setShowModal(null);
    };

    const translateText = () => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", inputText);
        encodedParams.append("target", outputLanguage.language);
        encodedParams.append("source", inputLanguage.language);

        const options = {
            method: "POST",
            url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "application/gzip",
                "X-RapidAPI-Key":
                    "",
                "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
            },
            data: encodedParams,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data)
                setOutputText(response.data.data.translations[0].translatedText)
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    useEffect(() => {
        getLanguages().then((res) => {
            setLanguages(res);
            setFilterLanguages(res);
        });
    }, []);

    return (
        <Center mt={50}>
            <Flex width="70%" direction="column">
                <Flex gap={4}>
                    <Flex direction="column" w="50%">
                        <SelectLanguage
                            type="Input"
                            language={inputLanguage}
                            showModal={showModal}
                            handleChange={() => toggleShowModal("Input")}
                        />
                        {!showModal && (
                            <>
                                <TextBox 
                                type="Input"
                                inputText = {inputText}
                                setInputText = {setInputText}
                                />
                                <Button mt={5} w="50%" onClick={translateText}>
                                    Traduire
                                </Button>
                            </>
                        )}
                    </Flex>
                    <Button rounded="full" p={1} onClick={languageSwitch}>
                        <TbSwitchHorizontal size={20} />
                    </Button>
                    <Flex direction="column" w="50%">
                        <SelectLanguage
                            type="Output"
                            language={outputLanguage}
                            showModal={showModal}
                            handleChange={() => toggleShowModal("Output")}
                        />
                        {!showModal && 
                        <TextBox 
                        type="Output" 
                        outputText = {outputText}
                        setOutputText = {setOutputText}
                        />}
                    </Flex>
                </Flex>
                {showModal && (
                    <Modal
                        searchInputValue={searchInput}
                        selectedLanguage={
                            showModal == "Input"
                                ? inputLanguage.name
                                : outputLanguage.name
                        }
                        handleClick={(e) =>
                            changeLanguage(
                                showModal,
                                (e.target as HTMLLIElement).innerText
                            )
                        }
                        handleChange={filterLang}
                        languages={filterLanguages}
                    />
                )}
            </Flex>
        </Center>
    );
}

export default App;
