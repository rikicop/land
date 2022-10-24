import { CardContainer } from "./ProjectStyles";
import { useRouter } from "next/router";
//ICONS
import { FaTools } from "react-icons/fa";
//Typings
import { ArticleItemProps } from "../../typings";
//Sanity
import { urlFor } from "../../sanity";

const ProjectItem = ({ data }: ArticleItemProps) => {
  /* console.log('Data: ' , data); */
  const router = useRouter();
  return (
    <CardContainer>
      <div className="card-head">
        <div className="image-wrapper">
          {data.mainImage && (
            <img
              src={urlFor(data.mainImage).url()!}
              alt={data.title}
            />
          )}
        </div>
        <h3 className="card-title">{data.title}</h3>
        <p className="card-excerpt">{data.description}</p>   
      </div>
    
      <div className="footer-wrapper">
      
         <div className="more-info">
          <div className="promo">
            <FaTools  style={{ color: 'var(--primary-color)', width: '20px' }}/>
              <span style={{marginLeft:"4px"}}>{data.technologies}</span>      
          </div>
        </div>
        <div className="btn-wrapper">
          <button className="btn-read" onClick={()=> router.push(data.vercel)}>DEMO</button>
          <button className="btn-read" onClick={()=> router.push(data.github)}>GITHUB</button>
          {data.video && <button className="btn-read" onClick={()=> router.push(data.video)}>VIDEO</button>}
        </div>
      </div>
    </CardContainer>
  );
};

export default ProjectItem;
