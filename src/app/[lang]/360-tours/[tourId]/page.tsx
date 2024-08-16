export default async function SingleTourDisplay({
  params: { lang, tourId },
}: {
  params: { lang: string; tourId: string };
}) {
  const baseUrl = `https://${tourId}.netlify.app/`;

  return (
    <main className='w-full h-screen'>
      <div className='w-full h-full'>
        <iframe src={baseUrl} style={{ width: '100%', height: '100%', border: 'none' }} allowFullScreen />
      </div>
    </main>
  );
}
