export default async function NewsPage({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  return (
    <main>
      <h1 className='text-h1-desktop'>NOVOSTI GRUPNO</h1>
    </main>
  );
}
