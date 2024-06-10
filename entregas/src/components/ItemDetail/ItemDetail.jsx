import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Image, Flex} from '@chakra-ui/react'

const ItemDetail = ({ nombre, stock, imagen, descripcion  }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades de ${nombre}`)
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
                </CardFooter>
                </Stack>
            </Card>
        </Flex>
    )
}

export default ItemDetail
