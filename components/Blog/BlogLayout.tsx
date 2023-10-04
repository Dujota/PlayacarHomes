import AlertBanner from 'components/AlertBanner';
import LargeModal from 'components/common/modals/LargeModal';

export default function BlogLayout({ preview, loading, children }: { preview: boolean; loading?: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className='min-h-screen'>
        <LargeModal />
        <AlertBanner preview={preview} loading={loading} />
        {children}
      </div>
    </>
  );
}
