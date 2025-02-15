function errorHandling(err, req, res, next) {
    if (err || res.statusCode >= 400) {
        res.status(err.status || res.statusCode || 500).json({
            status: err.status || res.statusCode || 500,
            message: err.message || "An error occurred. Please try again later."
        });
    } else {
        next();
    }
}

export {
    errorHandling
}
