import AlertBanner from 'components/AlertBanner';
import LargeModal from 'components/common/modals/LargeModal';

export default function ListingsLayout({ preview, loading, children }: { preview: boolean; loading?: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className='min-h-screen'>
        <AlertBanner preview={preview} loading={loading} />
        <LargeModal />
        {children}
      </div>
    </>
  );
}
