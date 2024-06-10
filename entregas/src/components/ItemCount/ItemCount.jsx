import React, { useState } from 'react'
import { Button, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)
    
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > valorInicial && setCount(count - 1)
    }

  return (
    <Flex>
        <Button m={5} 
          variant='solid' 
          bg={'#28193D'} 
          color={'#fff'}
          _hover={{ bg: '#46315C', color: '#fff' }} 
          onClick={decrementar}> 
            - 
          </Button>
          <Text m={6}>
            {count}
          </Text>

        <Button m={5} 
          variant='solid' 
          bg={'#28193D'} 
          color={'#fff'}
          _hover={{ bg: '#46315C', color: '#fff' }} 
          onClick={incrementar}>
             +
        </Button>

        <Button m={5} 
          variant='solid' 
          bg={'#28193D'} 
          color={'#fff'}
          _hover={{ bg: '#46315C', color: '#fff' }} 
          onClick={() => onAdd(count)}>
             Agregar al carrito 
        </Button>
    </Flex>
  )
}

export default ItemCount
