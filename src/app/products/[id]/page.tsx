import ProductsList from '@/components/list/productsList'
import React from 'react'
import Clients from './components/clients'
import ProductDetails from './components/productDetails'
import ProductInformation from './components/productInformation'
import { Divider, Typography } from '@mui/material'

const Product = () => {
  return (
    <main>
    <ProductDetails/>
    <ProductInformation/>
    <Typography variant='h3' py={'24px'} color={'text.primary'}>
    BESTSELLER PRODUCTS
    </Typography>
    <Divider/>
    <ProductsList/> 
    <Clients/>
    </main>
  )
}

export default Product