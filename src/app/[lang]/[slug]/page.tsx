export default async function Page({ params: { lang, slug } }: { params: { lang: string; slug: string } }) {
  return <main>{JSON.stringify(lang) + '/' + JSON.stringify(slug)}</main>;
}
