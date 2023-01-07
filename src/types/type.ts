export type CountryType = {
  region: string;
  population: number;
  flags: { png: string; svg: string };
  name: { common: string };
  languages: MyLanguages;
  capital: string[];
};
export type MyLanguages = {
  [key: string]: string;
};
