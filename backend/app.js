const express = require("express");
const app = express();

const Errorhandler = require("./utils/ErrorHandler");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");


// ---->> that is for handle the cookie date
app.use(express.json());
app.use(cookieParser());
app.use(express.static("uploads/"))
app.use(bodyParser.urlencoded({extended: true,limit:"50mb"}))

// .env file import ----->>
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env",
    });
}

// it's for Error handling---->>
app.use(Errorhandler)


module.exports = app
