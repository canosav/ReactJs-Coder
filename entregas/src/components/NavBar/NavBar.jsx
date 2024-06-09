import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Flex,
    Heading,
    IconButton
} from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#68507B'}
        >
        <Heading fontSize={'xl'} m={2}>Logo</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />} backgroundColor={'#8D769A'} >
                Productos
            </MenuButton>
                
            <MenuList>
                <MenuItem>Rostro</MenuItem>
                <MenuItem>Ojos</MenuItem>
                <MenuItem>Labios</MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  )
}

export default NavBar