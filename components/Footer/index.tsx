import React from "react";
// icons 
import { FaGithub,FaLinkedin } from "react-icons/fa";
// styled components
import { LowerFooter, Section, BrandContainer, ContactContainer, Title, BrandName,Email } from "./FooterElements";
// router
import { useRouter } from "next/router";

export default function Footer() {
  
  const router = useRouter();

  return (
   <>
    <Section id ="footer">
      <BrandContainer>
       {/*  <ImgContainer>
          <Image src={logo_text} className="img_logo" alt="Footer Logo" height={50} width={200} />
        </ImgContainer>

 */}    <BrandName>RICARDO OTÁLORA</BrandName>
        <ul>
          <li><FaGithub onClick={() =>  router.push('https://github.com/rikicop')}/></li>
          <li><FaLinkedin onClick={()=> router.push('https://www.linkedin.com/in/ricardo-otalora-luna/') }/></li>
        </ul>

      </BrandContainer>  

      {/* <div className="about container">
        <div className="title"><h3>About us</h3></div>
        <p>
          
        </p>
      </div> */}

      <ContactContainer>

        <Title>
          <h2>Contácto</h2>
        </Title>

        <p>+57 320 957 3682</p>
        <Email>rikotalora@gmail.com</Email>

      </ContactContainer>

    </Section>


    <LowerFooter>
      <h2>© 2022 RO.  {/* <span>Educación en Línea</span> */}</h2>
    </LowerFooter>
   </>
  );
}

