const brandAuthorizationMiddleware = (req, res, next) => { 
    // Check if the brand is authorized to perform the request 
    // For simplicity, we assume the brand is authorized 
    const {role, id} = res.locals.brand;
    if(role !== 'brand') { 
        return res.status(403).json({message: 'Access denied: Brand is not authorized'}); 
    }

    // check if the requested resource belongs to the brand
    if(req.params.id && req.params.id !== id) { 
        return res.status(403).json({message: 'Access denied: You cannot modify other brands'}); 
    }
    // Brand is authorized to access or modify the resource
    next(); 
}
module.exports = brandAuthorizationMiddleware;
