const catchErrors = fn => {
  return function(...args) {
    return fn(...args).catch(err => {
      throw new Error(err);
    });
  };
};

module.exports = { catchErrors };
