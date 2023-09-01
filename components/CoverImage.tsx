import cn from 'classnames';
import { urlForImage } from 'lib/sanity.image';
import { deriveCtaHref } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface CoverImageProps {
  title: string;
  slug?: string;
  image: any;
  priority?: boolean;
  type?: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, type } = props;

  const image = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
    >
      <Image
        className='h-auto w-full'
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes='100vw'
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  );

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/${deriveCtaHref(type)}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
