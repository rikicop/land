import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
//DATA STATIC
import { homeObjOne } from "../DataHero";

const Home: NextPage = () => {
  return (
    <>
     <Navbar />
     <Hero {...homeObjOne} />
    </>
  )
}

export default Home
