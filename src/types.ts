export interface IGame {
  id: string;
  name: string;
  provider: number;
  cover: string;
  coverLarge: string;
  data: Date;
}

export interface IProvider {
  id: string;
  name: string;
  logo: string;
}

export interface IGroup {
  id: string;
  name: string;
  games: number[];
}
