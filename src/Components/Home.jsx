import React from 'react'
import NavbarMain from './NavbarMain'
import HomeSlider from './HomeSlider'
import Subcribe from './Subcribe'
import ShopByCategory from './ShopByCategory'
import NewArrivals from './NewArrivals'

const Home = () => {
  return (
    <>
        <div>
            <NavbarMain/>
            <HomeSlider/>
            <NewArrivals/>
            <ShopByCategory/>
            <Subcribe/>
        </div>
    </>
  )
}

export default Home