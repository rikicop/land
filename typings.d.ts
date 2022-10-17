export interface Project {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  mainImage: string;
  author: {
    name: string;
    image: string;
  };
  technologies: string;
  vercel: string;
  github: string;
  slug:{
    current: string;
  };
  body:[object];

}

export interface IndexPageProps {
  data: {
    title: string;
    description: string;
    slug: string | any;
    body: [object];
    technologies: string;
    mainImage: string;
    github: string;
    vercel: string;
  }[];
  title: string;
}

export interface ArticleItemProps {
  data: {
    slug: string | any;
    title: string;
    description: string;
    technologies: string;
    mainImage?: string | any;
    body: [object];
    github: string;
    vercel: string;
    authorPicture?: string | any;
    author?: string;
  };
}



export interface PostType {
  _id: string;
  _createdAt: string;
  title: string;
  video: string;
  author: {
    name: string;
    image: string;
  };
  comments: Comment[];
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };

  slug: {
    current: string;
  };
  body: [object];
}

export interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}
