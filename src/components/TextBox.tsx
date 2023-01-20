import { Box, Button, Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

interface TextBoxProps {
    type: string;
    inputText?: string;
    setInputText?: Dispatch<SetStateAction<string>>;
    outputText?: string;
    setOutputText?: Dispatch<SetStateAction<string>>;
}

function TextBox({
    type,
    inputText,
    setInputText,
    outputText,
}: TextBoxProps) {
    return (
        <Box position="relative">
            <Textarea
                placeholder={type === "Input" ? "Entrez du texte..." : "Traduction"}
                resize="none"
                disabled={type === "Output"}
                height={200}
                pr={10}
                onChange = {(e) => setInputText?.(e.target.value)}
                value = {type == "Input" ? inputText : outputText}
            />
            {inputText && 
                <IoMdClose size={20} style={{position: "absolute", top: 10, right: 10, zIndex: 1000, cursor: "pointer"}} onClick={()=>setInputText?.('')}/>
            }
        </Box>
    );
}

export default TextBox;
