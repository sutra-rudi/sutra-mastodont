export default function getSingleEvent(id: string) {
  return `query singleEvent {
  event(id: "${id}", idType: DATABASE_ID) {
        id
        title
        databaseId
        eventUvod {
          cijenaEvent
          emailKontaktEvent
          kontaktTelefonZaEvent
          lokacijaEvent
          organizatorEventa
          prikazDodatnihOpcijaEvents
          krajEventaGrupa {
            datumEventaKraj
            vrijemeEventaKraj
          }
          pocetakEventaVrijemeDarumGrupa {
            datumEventaPocetak
            vrijemeEventaPocetak
          }
        }
        naslovnaSlika {
          glavnaSlikaNaslovnaSlika {
            node {
              sourceUrl
              altText
              description
            }
          }
          sekundarnaGlavnaSlikaThumbnailHover {
            node {
              sourceUrl
              altText
              description
            }
          }
        }
        eventHr {
          eventHr {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
        eventEng {
          eventEng {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
        eventGer {
          eventGer {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
        eventFra {
          eventFra {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
        eventIta {
          eventIta {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
        eventSlo {
          eventSlo {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
        eventEsp {
          eventEsp {
            mjestoOdrzavanja
            nazivEventa
            program
            sazetiOpis
            tag
          }
        }
      }
    
  }
`;
}
