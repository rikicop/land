import type { NextPage } from 'next'
//Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
//Data 
import { homeObjOne } from "../data/DataHero";

const Home: NextPage = () => {
  return (
    <>
     <Navbar />
     <Hero {...homeObjOne} />
     <Features />
    </>
  )
}

export default Home
