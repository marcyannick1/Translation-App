import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Navbar />
            <App />
        </ChakraProvider>
);