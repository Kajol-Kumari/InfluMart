const influencerLoggingMiddleware = (req, res, next) => {
    console.log(`Influencer ${res.locals.influencer.id} is performing ${req.method} on ${req.url}`);
    next();
}
module.exports = influencerLoggingMiddleware;
