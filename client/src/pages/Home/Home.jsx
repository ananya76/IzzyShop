import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts.jsx/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Slider></Slider>
      <FeaturedProducts type = "Featured"></FeaturedProducts>
      <Categories></Categories>
      <FeaturedProducts type = "Trending"></FeaturedProducts>
      <Contact></Contact>
      
    </div>
  )
}

export default Home