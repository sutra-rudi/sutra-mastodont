export default async function BlogPage({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main>
      <>
        CIAO BLOG OVDJE CE SVI BITI
        <iframe
          width={'640px'}
          height={'400px'}
          allow={'xr-spatial-tracking'}
          allowFullScreen
          frameBorder={0}
          src={'https://orbix360.com/t/xvlByOHKG0do2GI1I7FWaMfKGQ13/5755234980724736/villa-culina?embed=yes'}
        />
      </>
    </main>
  );
}
