const Errorhandler = require("../utils/Errorhandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error'

    // Wrong mongoDB ID Error ------>>>>
    if (err.name === "CastError") {
        const message = `Resources Not found with this Id... Invalid ${err.path} `
        err = new Errorhandler(message, 400)
    }

    // --->>> Duplication Key Error handeling ---->>>>

    if (err.code === 11000) {
        const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
        err = new Errorhandler(message, 400);
    }

    // ---->>> Wrong JWT (jsonwebtoken) Error handing ------------>>>
    if (err.name === 'JsonWebTokenError') {
        const message = 'your url is invalid Please try again letter'
        err = new Errorhandler(message, 400)
    }

    // Expire  JWT (JsonWebToken)  Error handing -------.>>>>

    if (err.name === 'TokenExpiredError') {
        const message = 'your url is Expired please try again letter'
        err = new Errorhandler(message, 400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })


}