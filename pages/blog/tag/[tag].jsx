import Head from 'next/head';
import { useRouter } from 'next/router';
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../../../components/BlogCard';

const graphcms = new GraphQLClient(process.env.HYGRAPH_API_ENDPOINT);

const QUERY = gql`
  query Post($tag: String!) {
    posts(where: { tags_contains_some: [$tag] }) {
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
      content {
        html
        text
      }
      imageDescription
    }
  }
`;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { tag: 'general' } },
      { params: { tag: 'kampus' } },
      { params: { tag: 'gunadarma' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = params.tag;
  const data = await graphcms.request(QUERY, { tag });
  const posts = data.posts;

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Blog({ posts }) {
  const router = useRouter();
  const { tag } = router.query;
  console.log(tag);

  return (
    <>
      <Head>
        <title>azsa-nrd | {tag}</title>
        <meta name='description' content='azsa nurwahyudi personal website blog' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='px-5 md:px-20 py-10 md:py-16'>
        <div className='mb-10 md:flex md:items-center md:gap-5'>
          <h1 className='font-medium text-4xl text-ash-600 dark:text-gray-300 mb-4 md:mb-0'>
            The Blog
          </h1>
          {tag && (
            <span className='text-lg bg-emerald-400 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-600 shadow px-4 py-[3px] rounded select-none'>
              {tag}
            </span>
          )}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8'>
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
