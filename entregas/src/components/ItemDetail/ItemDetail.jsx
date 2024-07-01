import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image, Button, Stack} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Context from '../../context/CartContext';

const ItemDetail = ({ nombre, stock, imagen, descripcion  }) => {
    const [ cantidad, setCantidad ] = useState(0)
    const { addItem } = useContext(Context)
    const onAdd = (quantity) => {   
        const item = {
            id,
            nombre,
            precio
        } 
        addItem(item, quantity)
        toast(`Agregaste ${quantity} unidades`)
        setCantidad(quantity)
    }

    return (
        <Flex justify={'center'} align={'center'} backgroundColor={'#B3A3BA'} p={10}>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                m={15}
                border='3px' borderColor='#243F4D' boxShadow='2xl' backgroundColor={'#D9D8D9'}
            >
                <Image
                objectFit='cover'
                m={10}
                maxW={{ base: '100%', sm: '450px' }}
                src={imagen}
                />
            
                <Stack>
                <CardBody >
                    <Heading fontSize={40} m={10}>{nombre}</Heading>
                    <Text  fontSize={30} m={10}>{descripcion} </Text>
                </CardBody>
            
                <CardFooter >
                    <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
                    <ToastContainer />
                    {
                        cantidad > 0 ?
                        <Flex justify={'space-between'} align={'center'} w={'100%'}>
                            <Button 
                                bg={'#AD886E'} 
                                color={'#243F4D'}
                                w={'100%'}
                                h={'5vh'}
                                mt={11}
                                borderRadius={0}
                                _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                                        <Link to='/cart'>Ir al carrito</Link> 
                            </Button>
                            <Button 
                                bg={'#AD886E'} 
                                color={'#243F4D'}
                                w={'100%'}
                                h={'5vh'}
                                mt={11}
                                borderRadius={0}
                                _hover={{ bg: '#ECCDB7', color: '#243F4D' }}>
                                <Link to='/'>Seguir comprando</Link> 
                            </Button>
                        </Flex>            
                        :
                        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                    }
                </CardFooter>
                </Stack>
            </Card>
        </Flex>
    )
}

export default ItemDetail
