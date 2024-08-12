import React from 'react'
import ProductBanner from '../components/product/ProductBanner'
import ProductSection2 from '../components/product/ProductSection2'
import ProductSection3 from '../components/product/ProductSection3'
import ProductSection4 from '../components/product/ProductSection4'
import ProductSection5 from '../components/product/ProductSection5'
import Join from '../components/Join'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Product() {
  return (
    <>
    <Header/>
    <ProductBanner/>
    <ProductSection2/>
      <ProductSection3/>
      <ProductSection4/>
      <ProductSection5/>
      <Join/>
      <Footer/>
    </>
  )
}
