/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { motion, useScroll } from 'framer-motion';
import { GraphQLClient, gql } from 'graphql-request';
import BlogDetail from '../../../components/BlogDetail';

const graphcms = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT);

const QUERY = gql`
  query Post($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      tags
      slug
      title
      createdAt
      updatedAt
      author {
        id
        name
      }
      coverPhoto {
        url
        id
      }
      imageDescription
      content {
        html
        text
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.posts[0];

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPosts({ post }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Head>
        <title>azsa-nrd | {post.title}</title>
        <meta name='description' content={post.content.text} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <motion.div
        className='bg-secondary h-1 fixed top-0 right-0 left-0 origin-left'
        style={{ scaleX: scrollYProgress }}
      />
      <BlogDetail {...post} />
    </>
  );
}
