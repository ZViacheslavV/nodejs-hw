import createHttpError from 'http-errors';
import { Session } from '../models/session.js';

export const authenticate = async (req, res, next) => {
  if (!req.cookies.accessToken)
    throw createHttpError(401, 'Missing access token');

  const session = Session.findOne({
    accessToken: req.cookies.accessToken,
  });

  if (!session) throw createHttpError(401, 'Session not found');
};
