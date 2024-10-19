import { videoResources } from '../pathsUtils/mediaImportsDynamic';

export function generateSeoSchemaOrg(data: any) {
  if (!data) return null;
  const companyInfo = data?.data?.seoSchemaOrg?.edges[0]?.node?.osnovneInformacijeOWebstraniciNapredniSeo;
  const contactInfo = companyInfo?.kontaktInformacijeContactPoint;
  const offerings = companyInfo?.offerings;
  const companyDetails = companyInfo?.opceniteInformacijeOTvrtkiCompanyInformation;

  if (!companyInfo || !contactInfo || !companyDetails) {
    throw new Error('Nedostaju podaci za generiranje schema.org.');
  }

  // Generiraj schema.org objekt
  const schemaOrgData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyDetails.nazivTvrtke,
    legalName: companyDetails.legalName,
    description: companyDetails.opisTvrtke,
    foundingDate: companyDetails.datumOsnivanja,
    awards: companyDetails.nagradePriznanja,
    taxID: contactInfo.porezniBroj,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.adresa,
      addressLocality: 'Zagreb',
      postalCode: '10000',
      addressCountry: 'HR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.telefon,
      faxNumber: contactInfo.fax,
      email: contactInfo.email,
      contactType: 'Customer Service',
      availableLanguage: contactInfo.jeziciNaKojimaJeDostupnaUsluga.split(', ').map((lang: string) => lang.trim()),
    },
    url: contactInfo.urlWebStranice,
    sameAs: contactInfo.druptveneMrezeLinkoviNaProfil,
    makesOffer: {
      '@type': 'Offer',
      description: offerings.akcije,
      availability: offerings.dostupnost,
      priceCurrency: 'USD', // pretpostavka, može se prilagoditi
      price: parseFloat(offerings.cjenovniRaspon.replace(/[^0-9.]/g, '')).toFixed(2), // Uklanjanje valute i formatiranje cijene
      itemOffered: {
        '@type': 'Product',
        name: offerings.product,
        description: `Features: ${offerings.amenityFeature}`,
        image: videoResources.amenities.placeholder,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD', // Pretpostavka, može se prilagoditi
          price: offerings.cjenovniRaspon,
          itemCondition: 'https://schema.org/NewCondition', // Pretpostavka, može se prilagoditi
          availability: 'https://schema.org/InStock', // Pretpostavka, može se prilagoditi
        },
      },
    },
    brand: companyDetails.brendovi.split(', ').map((brand: string) => ({ '@type': 'Brand', name: brand })),
    areaServed: companyDetails.podrucjaEkspertize,
    logo: 'https://www.example.com/logo.png', // Može se dodati logo ako postoji
    additionalType: companyDetails.licenca,
  };

  return JSON.stringify(schemaOrgData, null, 2);
}
