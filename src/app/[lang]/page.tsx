export default async function Page({ params: { lang } }: { params: { lang: string } }) {
  return <main>{JSON.stringify(lang)}</main>;
}
