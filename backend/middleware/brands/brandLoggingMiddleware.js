const brandLoggingMiddleware = (req, res, next) => {
    console.log(`Brand ${res.locals.brand.id} is performing ${req.method} on ${req.url}`);
    next();
}
module.exports = brandLoggingMiddleware;
