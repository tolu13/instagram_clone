import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';

const FeedPosts = () => {
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <>
    <Container maxW={"container.sm"} py={10} px={2}>
      {isloading &&[0, 1, 2, 3].map((_, idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
            <SkeletonCircle size={"10"} />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton  height={"10px"} w={"200px"}/>
              <Skeleton  height={"10px"} w={"200px"}/>
            </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box>contents wrapped</Box>
            </Skeleton>
        </VStack>
      
      ))}
      <FeedPost  img='/img1.png' username='burakorkmezz' avatar='img1.png'/>
      <FeedPost  img='/img2.png' username='josh' avatar='img2.png'/>
      <FeedPost  img='/Screenshot_20240317-225326.jpg' username='Slimtolu' avatar='Screenshot_20240317-225326.jpg'/>
      <FeedPost  img='/tolu-redshirt.jpg' username='Slimtee' avatar='tolu-redshirt.jpg' />
      <FeedPost  img='/img3.png' username='johndoe' avatar='img3.png'/>
    </Container>
    </>
      
  )
}

export default FeedPosts;