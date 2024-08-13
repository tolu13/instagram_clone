import { Box, Image, Input, VStack } from '@chakra-ui/react';
import React from 'react'

export const AuthForm = () => {
  return <>
    <Box border={"1px solid blue"} borderRadius={4} padding={5}>
    <VStack spacing={4}>
      <Image  src='/logo.png' h={22} cursor={"pointer"} alt='instagram'/>
      <Input
        placeholder='Email'
        fontSize={14}
        type='email'
       />
       <Input
         placeholder='Password'
         fontSize={14}
         type='password'
        /> 
    </VStack>
    </Box>
  </>
  
}

export default AuthForm;