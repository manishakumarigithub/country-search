export type CountryType = {
  region: string;
  population: number;
  flags: { png: string; svg: string };
  name: { common: string };
  languages: MyLanguages;
  capital: string[];

  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  car: {
    signs: string;
    side: string;
  };
  continents: string;
  timezones: string;
};
export type MyLanguages = {
  [key: string]: string;
};
