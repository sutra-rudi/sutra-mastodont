export default async function SingleTourDisplay({
  params: { lang, tourId },
}: {
  params: { lang: string; tourId: string };
}) {
  const getIdFromSlug = (slug: string): string => {
    const parts = slug.split('-');
    return parts.pop() || '';
  };

  //   const tourId = getIdFromSlug(params);
  //  const router = useRouter();

  //   console.log('TUR ID', tourId);

  return <main>{JSON.stringify(tourId)}</main>;
}
