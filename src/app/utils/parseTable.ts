import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

export function parseTablica(node: any, lang: any = 'hr') {
  const l = getSuffixFromLang(lang);
  const langKey = `tablica${l}`;
  const innerKey = langKey;

  const tablicaData = node?.[langKey]?.[innerKey];
  if (!tablicaData) return null;

  const brojKolumni = tablicaData.brojKolumni || 0;

  const kolumne = [];
  for (let i = 1; i <= brojKolumni; i++) {
    kolumne.push(tablicaData[`kolumna${i}naziv`] || '');
  }

  const redovi = [];
  for (let r = 1; r <= tablicaData.brojRedova; r++) {
    const nazivReda = tablicaData[`red${r}naziv`] || '';
    const vrijednosti = [];

    for (let c = 1; c <= brojKolumni; c++) {
      vrijednosti.push(tablicaData[`r${r}c${c}`] || null);
    }

    if (nazivReda || vrijednosti.some(Boolean)) {
      redovi.push({ nazivReda, vrijednosti });
    }
  }

  return {
    naslov: tablicaData.uvod?.naslov || '',
    nadnaslov: tablicaData.uvod?.nadnaslov || '',
    brojKolumni,
    kolumne,
    redovi,
  };
}
