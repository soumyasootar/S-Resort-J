import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box position={"sticky"} bottom={0} bg={"pink"} width={"100%"}>
        <Center >
            <Text>THIS IS FOOTER</Text>
        </Center>
    </Box>
  )
}

export default Footer