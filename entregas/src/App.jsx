import React from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Cart from './components/Cart/Cart';

function App() {
 return (
    <ChakraProvider>
      <BrowserRouter> 
        <NavBar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer title={'Makeup Store'} />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer title={'Makeup Store'} />}  />
          <Route path='/producto/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='#' element={<PageNotFound />} />
        </Routes>            
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
