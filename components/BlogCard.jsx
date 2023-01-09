/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { convertDate } from '../utils/convertDate';

export default function BlogCard({ slug, tags, title, createdAt, coverPhoto }) {
  return (
    <article>
      <div className='group'>
        <Link href={`/blog/post/${slug}`} className='rounded overflow-hidden block'>
          <img src={coverPhoto.url} alt={`image ${title}`} className='w-full' />
        </Link>
      </div>
      <div className='mt-5'>
        <div className='flex gap-2 text-ash-400 dark:text-neutral-400 capitalize'>
          {tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag}`} className='hover:text-secondary dark:hover:text-emerald-500'>
              {tag}
            </Link>
          ))}
        </div>
        <Link href={`/blog/post/${slug}`}>
          <h2 className='my-2 font-medium text-2xl capitalize hover:underline'>{title}</h2>
        </Link>
        <p className='text-ash-300 dark:text-neutral-500'>{convertDate(createdAt)}</p>
      </div>
    </article>
  );
}
