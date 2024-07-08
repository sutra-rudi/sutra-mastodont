export const getLokacijeQuery = (lang: string) => {
  const languageFieldsMap: Record<string, string> = {
    hr: `
      radnoVrijemeHr {
        textBoxHr
      }
    `,
    eng: `
      radnoVrijemeEng {
        textBoxEng
      }
    `,
    ger: `
      radnoVrijemeGer {
        textBoxGer
      }
    `,
    ita: `
      radnoVrijemeIta {
        textBoxIta
      }
    `,
  };

  return `
    query NewQuery {
      lokacije {
        edges {
          node {
            id
            photoGallery {
              fotogalerija {
                ${generatePhotoGalleryFields()}
              }
            }
            radnaVremenaLokacijaOsnovneInformacije {
              adresaLokacije
              emailLokacije
              googleMapsLinkPojedineLokacije
              imeOdgovorneOsobe
              kontaktTelefonLokacije
              kontaktTelefonLokacijeLink
              nazivLokacije
              status
            }
          naslovnaSlika {
          glavnaSlikaNaslovnaSlika {
            node {
              sourceUrl
              srcSet
            }
          }
          sekundarnaGlavnaSlikaThumbnailHover {
            node {
              sourceUrl
              srcSet
            }
          }
        }
            ${languageFieldsMap[lang] || ''}
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
