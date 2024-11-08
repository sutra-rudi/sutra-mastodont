export const getAllUslugeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      skupinaAtributaHr {
        atributiSkupinaHr {
          ${generatePoljeAtributaFields()}
        }
      }
      statusAtivacijePoJezicima {
        aktivatorHr
      }
      tagsHr {
        tagTextHr
      }
      seoHr {
        seoTagoviHr
        seoTekstHr
        ogImageHr {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      modulBazeTekstova2KolumneHr {
        naslovNadnaslov2KolumneTekstaHr {
          kolumneTeksta2 {
            tekstBazaTekstova
            tekstBazaTekstova2kolumna
          }
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
    eng: `
      skupinaAtributaEng {
        atributiSkupinaEng {
          ${generatePoljeAtributaFields()}
        }
      }
      statusAtivacijePoJezicima {
        aktivatorEng
      }
      tagsEng {
        tagTextEng
      }
      seoEng {
        ogImageEng {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      modulBazeTekstova2KolumneEng {
        naslovNadnaslov2KolumneTekstaEng {
          kolumneTeksta2 {
            tekstBazaTekstova
            tekstBazaTekstova2kolumna
          }
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
    ger: `
      skupinaAtributaGer {
        atributiSkupinaGer {
          ${generatePoljeAtributaFields()}
        }
      }
      statusAtivacijePoJezicima {
        aktivatorGer
      }
      tagsGer {
        tagTextGer
      }
      seoGer {
        seoTagoviGer
        seoTekstGer
        ogImageGer {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      modulBazeTekstova2KolumneGer {
        naslovNadnaslov2KolumneTekstaGer {
          kolumneTeksta2 {
            tekstBazaTekstova
            tekstBazaTekstova2kolumna
          }
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
    ita: `
      skupinaAtributaIta {
        atributiSkupinaIta {
          ${generatePoljeAtributaFields()}
        }
      }
      statusAtivacijePoJezicima {
        aktivatorIta
      }
      tagsIta {
        tagTextIta
      }
      seoIta {
        seoTagoviIta
        seoTekstIta
        ogImageIta {
          node {
            sourceUrl
            srcSet
          }
        }
      }
      modulBazeTekstova2KolumneIta {
        naslovNadnaslov2KolumneTekstaIta {
          kolumneTeksta2 {
            tekstBazaTekstova
            tekstBazaTekstova2kolumna
          }
          naslovIPodnaslovDvaPolja {
            nadnaslovPodnaslovBazaTekstova
            naslovBazaTekstova
          }
        }
      }
    `,
  };

  // Common fields for all languages
  const commonFields = `
    modulBazeTekstovaUvod {
      slika1 {
        node {
          sourceUrl
          srcSet
        }
      }
      slika2 {
        node {
          sourceUrl
          srcSet
        }
      }
      statusPrikazaTekstaZaPodstranicu
    }
    id
  `;

  return `
    query NewQuery {
      allUsluge {
        edges {
          node {
            ${languageFieldsMap[lang] || ''}
            ${commonFields}
          }
        }
      }
    }
  `;
};

function generatePoljeAtributaFields() {
  let fields = '';
  for (let i = 1; i <= 20; i++) {
    fields += `
      poljeAtributa${String(i).padStart(2, '0')} {
        nazivAtributa
        vrijednostAtributa
      }
    `;
  }
  return fields;
}
