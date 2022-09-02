import Navbar from "../navbar/navbar";
import { Box, Flex, Button, Spacer, Heading,ButtonGroup } from "@chakra-ui/react";

export default function Header() {
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="gray.900" color="white">
                <Box p='2'>
                    <Heading size='md'>Master Code</Heading>
                </Box>
                <Spacer />
                <Navbar/>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='teal'>Sign Up</Button>
                    <Button colorScheme='teal'>Log in</Button>
                </ButtonGroup>
            </Flex>
        </>
    )
}