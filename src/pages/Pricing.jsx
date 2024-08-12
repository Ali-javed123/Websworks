import React from 'react'
import PricingBanner from '../components/pricing/PricingBanner'
import PricingSection2 from '../components/pricing/PricingSection2'
import Join from '../components/Join'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function Pricing() {
  return (
    <>
    <Header/>
      <PricingBanner/>
      <PricingSection2/>
      {/* <ContactUsBanner/> */}
      <Join/>
      <Footer/>

    </>
  )
}
