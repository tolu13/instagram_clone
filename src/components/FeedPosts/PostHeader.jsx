import { Avatar, Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const PostHeader = () => {
  return (
    <>
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar  src='/img1.png' alt='user profile pics' size={"sm"}/>
        <Flex fontSize={12} fontWeight={"bold"} gap={'2'}>
          asaprogrammer
          <Box color={"gray.400"}>
            . 1w
          </Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color: "white"}} transition={"0.2 ease-in-out"}>
          Unfollow
        </Text>
      </Box>
    </Flex>
    </>
  )
}

export default PostHeader;