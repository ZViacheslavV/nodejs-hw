import createHttpError from 'http-errors';

export const authenticate = async (req, res, next) => {
  if (!req.cookies.accessToken)
    throw createHttpError(401, 'Missing access token');
};
