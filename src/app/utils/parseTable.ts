import { getSuffixFromLang } from '../langUtils/getSuffixFromLang';

export function parseTablica(node: any, lang: any = 'hr') {
  const l = getSuffixFromLang(lang);
  const langKey = `tablica${l}`;
  const innerKey = langKey;

  const tablicaData = node?.[langKey]?.[innerKey];
  if (!tablicaData) return null;

  const brojKolumni = tablicaData.brojKolumni || 0;

  // Uključujemo kolumnu 0 kao prvi stupac
  const kolumne = [tablicaData.kolumna0 || ''];

  // Dodaj ostale kolumne (1 -> brojKolumni)
  for (let i = 1; i <= brojKolumni; i++) {
    kolumne.push(tablicaData[`kolumna${i}naziv`] || '');
  }

  const redovi = [];
  for (let r = 1; r <= tablicaData.brojRedova; r++) {
    const nazivReda = tablicaData[`red${r}naziv`] || '';

    // Početna vrijednost je naziv reda (koji ide u prvu kolonu)
    const vrijednosti = [nazivReda];

    // Dodaj ostale vrijednosti iz r{n}c{m}
    for (let c = 1; c <= brojKolumni; c++) {
      vrijednosti.push(tablicaData[`r${r}c${c}`] || null);
    }

    // Uvjet za prikaz reda (ako postoji bilo koji sadržaj)
    if (nazivReda || vrijednosti.some(Boolean)) {
      redovi.push({ vrijednosti });
    }
  }

  return {
    naslov: tablicaData.uvod?.naslov || '',
    nadnaslov: tablicaData.uvod?.nadnaslov || '',
    brojKolumni: brojKolumni + 1, // uključujemo i kolumnu 0
    kolumne,
    redovi,
  };
}
