import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  
  return (
    <Box m={5} >
      const { getQuantity } = useContext(Context)
      <Link to='/cart'><PiShoppingCartLight  /></Link>
      <span>{ getQuantity() > 0 && getQuantity() }</span>
    </Box>
  )
}

export default CartWidget