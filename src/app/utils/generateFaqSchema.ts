export const generateFaqJsonLd = (findDataset: any, lang: any) => {
  const langMap = {
    hr: 'faqPojedinacnoDodavanjeHr',
    eng: 'faqPojedinacnoDodavanjeEng',
    ger: 'faqPojedinacnoDodavanjeGer',
    ita: 'faqPojedinacnoDodavanjeIta',
    fra: 'faqPojedinacnoDodavanjeFra',
    esp: 'faqPojedinacnoDodavanjeEsp',
  };

  //@ts-ignore
  const selectedField = langMap[lang] || 'faqPojedinacnoDodavanjeEng';

  const capitalize = (str: any) => str.charAt(0).toUpperCase() + str.slice(1);

  const mainEntity = findDataset
    .map(({ node }: any) => {
      const entry = node[selectedField];
      if (!entry) return null;

      const question = entry[`pitanjeFaq${capitalize(lang)}`];
      const answer = entry[`odgovorFaq${capitalize(lang)}`];

      if (!question || !answer) return null;

      return {
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      };
    })
    .filter(Boolean); // makni nullove

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  };
};
