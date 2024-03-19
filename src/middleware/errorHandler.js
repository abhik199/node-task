const DEBUG_MODE = true;

const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let data = {
    message: "Internal server error",
    ...(DEBUG_MODE === true && { originalError: error.message }),
  };

  return res.status(statusCode).json(data);
};

module.exports = errorHandler;
