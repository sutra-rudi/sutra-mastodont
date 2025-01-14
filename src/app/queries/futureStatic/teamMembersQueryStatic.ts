export default function teamMembersQuery() {
  return `query TeamMembersQuery {
  allTeamMembers {
    edges {
      node {
        id
        title
        meetOurTeamUvod {
          bonusLinkTeam
          emailTeam
          imePrezimeTeam
          instagramTeam
          linkedinTeam
          statusTeam
          xTwitterTeam
          slikaOsobeTeam {
            node {
              sourceUrl
              srcSet
            }
          }
        }
        meetOurTeamHr {
          meetOurTeamHr {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamEng {
          meetOurTeamEng {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamGer {
          meetOurTeamGer {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
        meetOurTeamIta {
          meetOurTeamIta {
            glazbaTeam
            interesiIHobijiTeam
            kratkaBiografijaCitat
            najdrazaKnjiga
            najdraziProjekt
            naslov
            omiljeniCitatTeam
            pozicijaIliUlogaUnutarKompanije
            preporukaFilma
            preporukaSerije
            prikazDodatnihOpcija
          }
        }
      }
    }
  }
}`;
}
