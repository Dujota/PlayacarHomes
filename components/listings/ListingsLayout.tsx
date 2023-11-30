import AlertBanner from 'components/AlertBanner';
import NewsLetterModal from 'components/common/modals/NewsLetterModal';

export default function ListingsLayout({ preview, loading, children }: { preview: boolean; loading?: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className='min-h-screen'>
        <AlertBanner preview={preview} loading={loading} />
        <NewsLetterModal />
        {children}
      </div>
    </>
  );
}
