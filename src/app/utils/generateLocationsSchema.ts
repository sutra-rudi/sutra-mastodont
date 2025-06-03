export function generateStoreJsonLd(data: any): any {
  if (!data || !data.radnaVremenaLokacijaOsnovneInformacije) return null;

  const info = data.radnaVremenaLokacijaOsnovneInformacije;

  const images = [
    data.naslovnaSlika?.glavnaSlikaNaslovnaSlika?.node?.sourceUrl,
    data.naslovnaSlika?.sekundarnaGlavnaSlikaThumbnailHover?.node?.sourceUrl,
    data.photoGallery?.fotogalerija?.galSlika01?.node?.sourceUrl,
    data.photoGallery?.fotogalerija?.galSlika02?.node?.sourceUrl,
    data.photoGallery?.fotogalerija?.galSlika03?.node?.sourceUrl,
    data.photoGallery?.fotogalerija?.galSlika04?.node?.sourceUrl,
  ].filter(Boolean);

  // Extract and normalize address
  const addressParts = info.adresaLokacije
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/\r/g, '')
    .split('\n')
    .map((line: any) => line.trim())
    .filter(Boolean);

  const address = {
    streetAddress: addressParts[0] || '',
    postalCode: addressParts[1] || '',
    addressLocality: addressParts[2] || '',
    addressCountry: 'HR',
  };

  // Extract localized description — prioritizing hrvatski
  const description =
    data.radnoVrijemeHr?.textBoxHr || data.radnoVrijemeEng?.textBoxEng || data.radnoVrijemeGer?.textBoxGer || '';

  return {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: info.nazivLokacije || data.title,
    description: description,
    image: images,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    telephone: info.kontaktTelefonLokacije || undefined,
    email: info.emailLokacije || undefined,
    url: info.googleMapsLinkPojedineLokacije || undefined,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      name: info.imeOdgovorneOsobe || undefined,
      telephone: info.kontaktTelefonLokacije || undefined,
      email: info.emailLokacije || undefined,
    },
  };
}
