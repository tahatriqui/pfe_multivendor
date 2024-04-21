const ErrorHandler = require('../utils/ErrorHandler')

module.exports = (err, res, req, next) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || 'internal server error'

    //wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resources not found with this id.. Invalid ${err.path}`
    }

    //duplicate key error
    if (err.code = 11000) {
        const message = `Duplicate key ${Object.key(err.keyValue)} Entred`
        err = new ErrorHandler(message, 400)
    }

    //wrong jwt error
    if (err.name = 'JsonWebToken') {
        const message = 'your url is invalid please try again later'
        err = ErrorHandler(message, 400)
    }

    //jwt expired
    if (err.name = "TokenExpiredError") {
        const message = `your Url is expired please try again later`
        err = ErrorHandler(message, 400)
    }

    res.status(err.statusCode).json(
        {
            success: false,
            message: err.message
        }
    )
}