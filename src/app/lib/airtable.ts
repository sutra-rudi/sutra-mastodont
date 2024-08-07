const Airtable = require('airtable');

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base('appYXK82EyIbHrHF7');

export const getRecords = async (lang: string, keyInQuestion: string, tableID: string) => {
  //ovo je baza tablice di cemo minjat ovisno sta nan triba

  const table = base(tableID); // ID tablice

  const records = await table.select().firstPage();

  const getKeysAndValues = records.map((record: any) => record.fields);

  const getCurrentTranslation = getKeysAndValues.find((keyName: any) => keyName.Kljuc === keyInQuestion);

  const parseTranslation = getCurrentTranslation[lang];

  return { getKeysAndValues, getCurrentTranslation, parseTranslation };
};
