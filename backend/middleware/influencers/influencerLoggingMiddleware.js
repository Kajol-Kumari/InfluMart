const influencerLoggingMiddleware = (req, res, next) => {
    const timestamp = new Date().toLocaleString(); // Get the current timestamp
    const influencerId = res.locals.influencer?.id;
    const method = req.method;
    const url = req.url;
    
    // Log the timestamp, influencer ID, HTTP method, and URL
    console.log(`[${timestamp}] Influencer ${influencerId} is performing ${method} on ${url}`);
    
    next();
}

module.exports = influencerLoggingMiddleware;
