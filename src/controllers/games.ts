import express from 'express';
import { NotFoundError } from '../errors';
import { authenticate } from '../middlewares/authenticate';
import { getAllGames } from '../services/games';

const gamesRouter = express.Router();

gamesRouter.get('/games', authenticate, (req, res, next) => {
  const games = getAllGames();
  if (games) {
    res.json(games);
  } else {
    next(new NotFoundError('Games not found'));
  }
});

export default gamesRouter;
