import { IGame, IGroup, IProvider } from './types';

//We will populate those with data from JSON, data will be reseted every time server reboots
export const games: IGame[] = [];
export const providers: IProvider[] = [];
export const groups: IGroup[] = [];
