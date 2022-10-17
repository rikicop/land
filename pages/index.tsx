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
import { Project,Blog } from "../typings"
import PortfolioList from '../components/PortfolioList';
import BlogList from '../components/BlogList';

// TYPES
interface Props {
  projects: [Project];
  blogs: [Blog];
}

export default function Home({projects,blogs}: Props) {
  return (
    <>
     <Navbar />
     <Hero {...homeObjOne} />
     <Features />
     <PortfolioList  data={projects} title="Portfolio"/>
     <BlogList data={blogs} title="Blog" />
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

const queryBlog = `*[_type == "post"]{
  _id,
  title,
  mainImage,
  slug,
  body}
`;
  
  const projects = await sanityClient.fetch(query);
  const blogs = await sanityClient.fetch(queryBlog);
 

  
  if(!projects.length || !blogs.length) {
    return{
      notFound:true,
    }
  }else{
    return{
      props:{
      projects,
      blogs
      }
    }
  }

  }
