import AlertBanner from 'components/AlertBanner';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';

export default function BlogLayout({ preview, loading, children }: { preview: boolean; loading?: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className='min-h-screen'>
        <NewsLetterModal />
        <AlertBanner preview={preview} loading={loading} />
        {children}
      </div>
    </>
  );
}
