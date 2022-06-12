const logErrors = (err, req, res, next) => {
  
  console.error(err);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  const { message } = err;

  res.status(500).json({ sucess: false, message });
};

module.exports = { logErrors, errorHandler };
