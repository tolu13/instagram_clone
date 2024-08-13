import { Flex } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const PageLayout = ({children}) => {
  return (
    <Flex>
        {/* sidebar on the left */}
        {pathname !== '/auth' ? (
            <Box w={{base: "70px", md: "240px"}}>
            <Sidebar />
            </Box>
        ) : null}
    </Flex>
  )
}

export default PageLayout;