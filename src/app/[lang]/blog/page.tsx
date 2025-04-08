export default async function BlogPage({
  params: { lang },
  searchParams: { tag },
}: {
  params: { lang: string };
  searchParams: { tag: string };
}) {
  return (
    <main>
      <h1 className='text-h1-desktop'>BLOGOVI GRUPNO</h1>
    </main>
  );
}
