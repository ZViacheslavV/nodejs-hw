import createHttpError from 'http-errors';

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) return nexy(createHttpError(400, 'Email in use'));

  res.status(201).json({});
};
