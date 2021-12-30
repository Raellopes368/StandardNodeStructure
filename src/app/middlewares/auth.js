module.exports = function auth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      error: {
        message: 'Autorizaçao necessária',
      },
    });
  }

  const [, token] = authorization.split(' ');
  if (!token) {
    return res.status(401).json({
      error: {
        message: 'Token não informado',
      },
    });
  }

  // fake verification token
  if (token !== 'abcdToken') {
    return res.status(401).json({
      error: {
        message: 'Token inválido',
      },
    });
  }

  return next();
};
