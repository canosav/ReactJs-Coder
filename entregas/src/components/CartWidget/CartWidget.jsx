import { Box } from '@chakra-ui/react';
import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";

const CartWidget = () => {
  return (
    <Box m={5} >
      <PiShoppingCartLight />
    </Box>
  )
}

export default CartWidget