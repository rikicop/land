//import imageUrlBuilder from "@sanity/image-url";
//import { useState } from "react";
//import BlockContent from "@sanity/block-content-to-react";
//import Toolbar from "../../components/Toolbar";
//import { useForm, SubmitHandler } from "react-hook-form";

import { PostType } from "../../typings";
import PortableText from "react-portable-text";

import styled from "styled-components";
import { sanityClient,urlFor } from "../../sanity";
import { GetStaticProps } from "next";


const Main = styled.div`
  margin: auto;
  //this top margin is just for landscape
  margin-top: 1rem;
  width: 750px;
  max-width: calc(100vw - 50px);
  //media for large screens
  @media screen and (min-width: 1280px) {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-size: 2rem;
  padding-bottom: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 3rem;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
`;

const Body = styled.div`
  p {
    font-size: 24px;
    /* text-indent: 10px; */
    line-height: 45px;
    letter-spacing: 1.5px;
    text-align: justify;
  }
  //media for mobile
  @media (max-width: 768px) {
    p {
      font-size: 18px;
      text-indent: 0;
      line-height: 25px;
      text-align: left;
    }
  }
`;

const Rule = styled.hr`
  margin: 5px auto;
  border: 1px solid var(--primary-color);
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 2px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Span = styled.span`
  color: #585858;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: 2px solid lightgray;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px #719ece;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 20px;
  margin: 8px 0;
  border: 2px solid lightgray;
  border-radius: 4px;
  display: inline-block;
  width: 100%;
  font-size: 15px;
  &:focus {
    outline: none;
    border: 2px solid var(--primary-color);
    box-shadow: 0 0 10px #719ece;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  color: red;
  font-weight: bold;
`;

const Submit = styled.button`
  background-color: var(--primary-color);
  font-size: medium;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: #719ece;
  }
`;

const CommentConfirmed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid blue;
  background-color: blue;
  color: white;
  h3 {
    font-size: medium;
    font-weight: bold;
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  margin: 10px auto;
  box-shadow: 3px 3px 2px -2px var(--primary-color);
  color: black;
  h3 {
    font-size: medium;
    font-weight: bold;
  }
  hr {
    margin: 5px auto;
    border: 2px solid lightgray;
  }
  p {
    span {
      color: var(--primary-color);
      text-transform: capitalize;
      margin-right: 5px;
    }
  }
`;

/* interface IFormInput {
  _id: string;
  name: string;
  email?: string;
  comment: string;
} */

interface Props {
  post: PostType;
}

function Post({ post }: Props) {
  //const [imageUrl, setImageUrl] = useState("");
  //const [submitted, setSubmitted] = useState(false);
  //console.log("POST: ", post);

  /* const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();
 */
 /*  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        fetch("/api/createComment", {
          method: "POST",
          body: JSON.stringify(data),
        })
          .then(() => {
            console.log(data);
            setSubmitted(true);
          })
          .catch((err) => {
            console.log(err);
            setSubmitted(false);
          });
        resolve();
      }, 1700);
    });
  }; */

 /*  useEffect(() => {
    const imgBuilder: any = imageUrlBuilder({
      projectId: "zvusid2u",
      dataset: "production",
    });
    setImageUrl(imgBuilder.image(post.mainImage));
  }, [post.mainImage]); */
  return (
    <div>
     {/*  <Toolbar /> */}
      <Main>
        <Title>{post.title}</Title>
        {post.mainImage && (
            <MainImage
              src={urlFor(post.mainImage).url()!}
              alt={post.title}
            />
          )}
        <Body>
          <Rule /> 
         <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-2xl font-bold mb-2 mt-2">
                  {props.children}
                </h1>
              ),
              h2: (props: any) => (
                <h2 className="text-2xl font-bold mb-2 mt-2">
                  {props.children}
                </h2>
              ),
              h3: (props: any) => (
                <h3 className="text-xl font-bold mb-2 mt-2">
                  {props.children}
                </h3>
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
              image: ({ asset }: any) => (
                <img style={{ width: 300 }} src={urlFor(asset).url()!} alt="" />
              ),
            }}
          />
        </Body>
        
        {/*} Form Begining
        {isSubmitting && <h1>Cargando...</h1>}
        {submitted ? (
          <CommentConfirmed>
            <h2>Gracias por tu comentario!</h2>
            <p>Ya se envió al administrador</p>
          </CommentConfirmed>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3 style={{ color: "blue" }}>Te gustó este artículo?</h3>
            <h4 style={{ color: "gray", marginTop: "2px" }}>
              Deja un comentario!
            </h4>
            <hr style={{ padding: "3px auto", margin: "8px 8px" }} />
            <input
              {...register("_id")}
              type="hidden"
              name="_id"
              value={post._id}
            />
            <Label>
              <Span>Nombre</Span>
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Pedro Villamizar"
              />
            </Label>
            <Label>
              <Span>Email</Span>
              <Input
                {...register("email", { required: true })}
                type="email"
                placeholder="pedro@mail.com"
              />
            </Label>
            <Label>
              <Span>Comentarios</Span>
              <Textarea
                {...register("comment", { required: true })}
                placeholder="Escribe tu comentario"
                rows={8}
              />
            </Label>
            <ErrorContainer>
              {errors.name && (
                <span className="text-red-500">
                  El Campo Nombre es requerido
                </span>
              )}
              {errors.email && (
                <span className="text-red-500">
                  El Campo Email es requerido
                </span>
              )}
              {errors.comment && (
                <span className="text-red-500">
                  El Campo Comentario es requerido
                </span>
              )}
            </ErrorContainer> 
            <Submit type="submit"> Ingresar </Submit>
          </Form>
              )} Form End */}
        {/* Comments */}
      {/*   <CommentContainer>
          <h3>Comentarios</h3>
          <hr style={{ width: "90%" }} />
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p style={{ margin: "1rem auto" }}>
                <span>{comment.name}:</span>
                {comment.comment}
              </p>
            </div>
          ))}
        </CommentContainer> */}
      </Main>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
const query = `*[_type == "post"]{
    _id,
    slug{
    current
  }
}`;
const posts = await sanityClient.fetch(query);

const paths = posts.map((post: PostType) => ({
    params: { 
      slug: post.slug.current 
    },
  }));

return {
  paths,
  fallback: "blocking",
};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        video,
        author -> {
            name,
            image
        },
        'comments': *[_type == "comment" && 
         post._ref == ^._id &&
         approved == true],
        description,
        mainImage,
        slug,
        body
}`;
  const post = await sanityClient.fetch(query, { slug: params?.slug });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}
