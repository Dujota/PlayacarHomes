import AlertBanner from 'components/AlertBanner';

export default function ListingsLayout({ preview, loading, children }: { preview: boolean; loading?: boolean; children: React.ReactNode }) {
  return (
    <>
      <div className='min-h-screen'>
        <AlertBanner preview={preview} loading={loading} />
        {children}
      </div>
    </>
  );
}
