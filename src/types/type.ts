export type CountryType = {
  region: string;
  population: number;
  flags: { png: string; svg: string };
  name: { common: string };
  languages: MyLanguages;
};
export type MyLanguages = {
  [key: string]: string;
};
