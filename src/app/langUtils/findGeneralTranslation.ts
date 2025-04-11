export function findGeneralTranslation(key: string, currentLang: string, arr: any[]): string {
  const f = arr.find((item) => item.key === key);

  //@ts-ignore
  return f[currentLang];
}
