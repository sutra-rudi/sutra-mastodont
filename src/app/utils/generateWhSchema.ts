//@ts-nocheck

/**
 * Generira Schema.org OpeningHoursSpecification + SpecialOpeningHoursSpecification JSON-LD objekt
 * @param {Object} node – tvoj GraphQL čvor s rasporedima
 * @returns {Object} – Schema.org JSON-LD za LocalBusiness
 */
export function generateSchemaOrgOpeningHours(node) {
  const dayMap = {
    ponedjeljak: 'Monday',
    utorak: 'Tuesday',
    srijeda: 'Wednesday',
    cetvrtak: 'Thursday',
    petak: 'Friday',
    subota: 'Saturday',
    nedjelja: 'Sunday',
  };

  function mapSchedule(scheduleObj) {
    return Object.entries(scheduleObj)
      .filter(([_, { opens, closes }]) => opens && closes)
      .map(([day, { opens, closes }]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${dayMap[day]}`,
        opens,
        closes,
      }));
  }

  const standard = node.tjedniRasporedRadnoVrijemeGoogleSeo.tjedniRasporedGoogleSeo;

  const seasonal = node.tjedniRasporedSezonskoRadnoVrijemeGoogleSeo.tjedniRasporedGoogleSeoSezonskoRadnoVrijeme;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    // redovno radno vrijeme
    openingHoursSpecification: mapSchedule(standard),
    // sezonsko (ljetno) radno vrijeme koristiti kao "special" hours
    specialOpeningHoursSpecification: mapSchedule(seasonal),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Standard Opening Notes',
        value: node.tjedniRasporedRadnoVrijemeGoogleSeo.dodatnaNapomenaTjedniRasporedHr,
      },
      {
        '@type': 'PropertyValue',
        name: 'Seasonal Opening Notes',
        value:
          node.tjedniRasporedSezonskoRadnoVrijemeGoogleSeo
            .noteDodatnaNapomenaTjedniRasporedSezonskoRadnoVrijemeGoogleSeo,
      },
    ],
  };
}
