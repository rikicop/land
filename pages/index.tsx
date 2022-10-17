import type { NextPage } from 'next'
//Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
//Data 
import { homeObjOne } from "../data/DataHero";
//GetServerSideProps Types
import { GetServerSideProps } from "next";
//Sanity
import { sanityClient } from '../sanity';
//Types
import { Project } from "../typings"
import PortfolioList from '../components/PortfolioList';

// TYPES
interface Props {
  projects: [Project];
}

export default function Home({projects}: Props) {
  return (
    <>
     <Navbar />
     <Hero {...homeObjOne} />
     <Features />
     <PortfolioList  data={projects} title="Portfolio"/>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  
  const query = `*[_type == "project"]{
  _id,
  title,
  description,
  mainImage,
  slug,
  body,
  technologies,
  github,
  vercel
}`;
  
  const projects = await sanityClient.fetch(query);

  
  if(!projects.length){
    return{
      notFound:true,
    }
  }else{
    return{
      props:{
        projects,
      }
    }
  }

  }
