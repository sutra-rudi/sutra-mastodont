export const getOkolicaQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      modulBazeTekstovaHr {
        nadnaslovPodnaslovBazaTekstovaHr
        naslovBazaTekstovaHr
        tekstBazaTekstovaHr
      }
    `,
    eng: `
      modulBazeTekstovaEng {
        nadnaslovPodnaslovBazaTekstovaEng
        naslovBazaTekstovaEng
        tekstBazaTekstovaEng
      }
    `,
    ger: `
      modulBazeTekstovaGer {
        nadnaslovPodnaslovBazaTekstovaGer
        naslovBazaTekstovaGer
        tekstBazaTekstovaGer
      }
    `,
    ita: `
      modulBazeTekstovaIta {
        nadnaslovPodnaslovBazaTekstovaIta
        naslovBazaTekstovaIta
        tekstBazaTekstovaIta
      }
    `,
  };

  return `
    query NewQuery {
      allOkolica {
        edges {
          node {
            id
            ${languageFieldsMap[lang] || ''}
            statusAtivacijePoJezicima {
              aktivatorEng
              aktivatorGer
              aktivatorHr
              aktivatorIta
            }
            photoGallery {
              fotogalerija {
        ${generatePhotoGalleryFields()}
             }
            }
          }
        }
      }
    }
  `;
};

function generatePhotoGalleryFields() {
  let fields = '';
  for (let i = 1; i <= 10; i++) {
    fields += `
      galSlika${String(i).padStart(2, '0')} {
        node {
          sourceUrl
          srcSet
        }
      }
    `;
  }
  return fields;
}
