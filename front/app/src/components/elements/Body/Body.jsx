import { Box, Flex, Button, ButtonGroup, Heading, Spacer, Text, Image } from "@chakra-ui/react";

export default function Body() {
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="gray.900" color="white" h="600px">
                <Box p='2' h="475px" padding="180px">
                    <Heading size='lg'>Compre y Cambien Sus Criptos</Heading>
                    <Text >
                        Realize sus Transacciones de Manera Rapida con nuestra plataforma.
                    </Text>
                    <Text>
                        Conectado a su Red Binance para facilitarle su informacion.
                        Mas de 100
                    </Text>

                    <Text>
                        Cryptos disponibles para transacciones
                    </Text>
                    <Text>
                        Seguro y Confiable
                    </Text>
                </Box>
                <Spacer />

                <Box h="200px" paddingRight={400}>
                    <Image boxSize='200px'
                        fit='cover' src='https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103' alt='Dan Abramov' />
                </Box>

            </Flex>

        </>
    )
}