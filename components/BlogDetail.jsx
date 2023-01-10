import Link from 'next/link';
import { convertDate } from '../utils/convertDate';

export default function BlogDetail({
  title,
  author,
  createdAt,
  tags,
  coverPhoto,
  imageDescription,
  content,
  updatedAt,
}) {
  return (
    <article className='lg:max-w-2xl mx-auto px-5 md:px-20 lg:px-0 py-5 md:py-16'>
      <div>
        <div className='mb-4 text-sm md:text-base flex gap-4'>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className='text-secondary dark:text-emerald-500'
            >
              {tag}
            </Link>
          ))}
        </div>
        <h1 className='text-3xl md:text-4xl font-bold capitalize text-gray-900 dark:text-gray-100 mb-2 mt-6'>
          {title}
        </h1>
        <p className='text-gray-500 dark:text-gray-300 text-sm md:text-lg flex gap-2 mb-2'>
          <span className='hidden md:inline'>{author.name}</span>
          <span className='hidden md:inline'>|</span>
          <span>{convertDate(createdAt)}</span>
        </p>
      </div>
      <div className='my-10'>
        <div
          className='h-72 md:h-96 bg-top bg-cover rounded'
          style={{ backgroundImage: `url(${coverPhoto.url})` }}
        />
        <p className='mt-4 mb-10 text-sm md:text-right text-gray-500 dark:text-gray-300'>
          {imageDescription && `(Foto: ${imageDescription})`}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: content.html }}
        className='prose dark:prose-invert prose-emerald prose-sm md:prose-lg w-full overflow-hidden'
      />
      <p className='mt-6 text-sm text-gray-500 dark:text-gray-300 md:text-right'>
        Terakhir diubah {convertDate(updatedAt)}
      </p>
    </article>
  );
}
