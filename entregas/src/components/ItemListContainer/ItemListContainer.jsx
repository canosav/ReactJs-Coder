import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()


  useEffect(() => {
    setLoading(true)

    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally (() => setLoading(false))
  },[categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'} backgroundColor={'#B3A3BA'} > 
      <Heading color={'#28193D'} mt={10}>{title}</Heading>
      {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>
           <BeatLoader color="#28193D" />
        </Flex>
        : 
        <ItemList products={products} />
      }
    </Flex>
  )
}

export default ItemListContainer
