import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({title}) => {
  return (
    <Flex justify={'center'} align={'center'} backgroundColor={'#B3A3BA'}>
        <Heading className='titulo'>{title}</Heading>
    </Flex>
  )
}

export default ItemListContainer