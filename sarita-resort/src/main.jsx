import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider,extendTheme } from "@chakra-ui/react";


const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ breakpoints, config })

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

