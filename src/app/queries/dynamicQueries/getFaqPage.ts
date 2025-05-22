export default function getFaqPage() {
  return `query faqPage{
  allFaqOnePager {
    edges {
      node {
        id
        title
        textHr {
          naslovHr
          sadrzajTextHr
        }
        textEng {
          naslovEng
          sadrzajTextEng
        }
        textEsp {
          naslovEsp
          sadrzajTextEsp
        }
        textFra {
          naslovFra
          sadrzajTextFra
        }
        textGer {
          naslovGer
          sadrzajTextGer
        }
        textIta {
          naslovIta
          sadrzajTextIta
        }
        textSlo {
          naslovSlo
          sadrzajTextSlo
        }
      }
    }
  }
}`;
}
