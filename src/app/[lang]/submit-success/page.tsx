import CountdownRedirect from './CountdownRedirect';

export default async function SubmitSuccess({ params: { lang } }: { params: { lang: string } }) {
  return (
    <main>
      <h2>
        Pozdrav, uspili smo, evo komponenta koja vraća za x sekundi, trenutno je fixirano ali spojimo na API, kao i
        jezike
      </h2>
      <CountdownRedirect seconds={10} redirectTo='/' />
    </main>
  );
}
