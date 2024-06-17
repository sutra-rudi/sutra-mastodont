export default async function Landing({ params: { lang } }: { params: { lang: string } }) {
  return <main>{JSON.stringify(lang)}</main>;
}
