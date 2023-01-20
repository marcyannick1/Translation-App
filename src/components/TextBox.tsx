import { Textarea } from "@chakra-ui/react";

interface TextBoxProps {
    type: string;
}

function TextBox({ type }: TextBoxProps) {
    return (
        <Textarea
            placeholder={type === "Input" ? "Entrez du texte..." : "Traduction"}
            resize="none"
            disabled={type === "Output"}
        />
    );
}

export default TextBox;
