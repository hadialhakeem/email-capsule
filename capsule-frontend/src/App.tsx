import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Home from "./components/Home"

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
)
