import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../../components/BlogCard';

const graphcms = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT);

const QUERY = gql`
  {
    posts {
      id
      tags
      slug
      title
      createdAt
      coverPhoto {
        url
      }
    }
  }
`;

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>azsa-nrd | blog</title>
        <meta name='description' content='azsa nurwahyudi personal website blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='px-5 md:px-20 py-10 md:py-16'>
        <div className='mb-8'>
          <h2 className='font-medium text-4xl text-ash-600 dark:text-gray-200'>The Blog</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
