import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeSection2 from '../components/home/HomeSection2'
import HomeSection3 from '../components/home/HomeSection3'
import HomeSection4 from '../components/home/HomeSection4'
import HomeSection5 from '../components/home/HomeSection5'
import HomeSection6 from '../components/home/HomeSection6'
import HomeSection7 from '../components/home/HomeSection7'
import HomeSection8 from '../components/home/HomeSection8'
import Join from '../components/Join'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function Home() {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
      <HomeSection5/>
      <HomeSection6/>
      <HomeSection7/>
      <HomeSection8/>
      <Join/>
      <Footer/>
    </>
  )
}
