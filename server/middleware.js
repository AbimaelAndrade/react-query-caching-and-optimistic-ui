module.exports = (req, res, next) => {
  if (req.method.toLowerCase() === "post") {
    setTimeout(() => {
      // res.status(400).jsonp({
      //   error: "Bad request",
      // });

      next();
    }, 4000);
  } else {
    next();
  }
};
