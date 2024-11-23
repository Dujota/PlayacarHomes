import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <>
      <Script id='seo' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    </>
  );
}
