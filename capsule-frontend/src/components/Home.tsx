import * as React from "react"
import {
  Box,
  Heading,
  Text,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


class Home extends React.Component {
    render() {
        return (
            <Box>
                <ColorModeSwitcher justifySelf="flex-end" />
                <Box textAlign="center">
                <Heading fontSize={"6xl"}>
                    Email Capsule
                </Heading>
                <br />
                <Text size={"xl"}>
                    Send an email to your future self.
                </Text>
                </Box>
            </Box>
        )
    }
}

export default Home;
