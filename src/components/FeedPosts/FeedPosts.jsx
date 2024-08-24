import React from 'react';
import FeedPost from './FeedPost';
import { Container } from '@chakra-ui/react';

const FeedPosts = () => {
  return (
    <>
    <Container maxW={"container.sm"} py={10} px={2}>
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