import fs from 'fs';
import path from 'path';
import { games, groups, providers } from '../data_extract';
import { IGame } from '../types';
import { logger } from './logger';

export const seedData = () =>
  //Read json file and seed it in memory as extract-data array of objects
  fs.readFile(path.join(__dirname, '../../data.json'), 'utf-8', (error, data) => {
    if (error) {
      logger.error(error.message);
    }

    const newData = JSON.parse(data);

    games.push(...newData?.games);
    groups.push(...newData.groups);
    providers.push(...newData.providers);
  });
