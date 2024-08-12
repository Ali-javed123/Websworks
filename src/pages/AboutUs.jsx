import React from 'react'
import AboutUsSection1 from '../components/aboutUs/AboutUsSection1'
import AboutUsSection2 from '../components/aboutUs/AboutUsSection2'
import AboutUsSection3 from '../components/aboutUs/AboutUsSection3'
import AboutUsSection4 from '../components/aboutUs/AboutUsSection4'
import Join from '../components/Join'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function AboutUs() {
  return (
    <>
    <Header/>
<AboutUsSection1/>
      <AboutUsSection2/>
      <AboutUsSection3/>
      <AboutUsSection4/>
      <Join/>
      <Footer/>
    </>
  )
}
