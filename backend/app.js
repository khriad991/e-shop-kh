const express = require("express");
const app = express();

const Errorhandler = require("./utils/Errorhandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-upload")

// ---->> that is for handle the cookie date
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
// app.use(fileUPload({useTempFiles: true})) // comment for simple errorn this package 

// .env file import ----->>
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env",
    });
}

// it's for Error handling---->>
app.use(Errorhandler)


module.exports = app
