const app = require('./app')


// --->>> Headline Uncaught Exceptional ERROR--->>>

process.on('uncaught', (err) => {
    console.log(`Error: ${err.message}`)
    console.log("shutting down the server for handling uncaught exception")
})

// Config -->>
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env",
    })
}

const server = app.listen(process.env.PORT, () => {
    console.log(
        `Server is running on http://localhost:${process.env.PORT}`
    )
})


// unHandle Promise rejection ---------->>
process.on("unhandledRejection", (err) => {
    console.log(`shotting down the server for ${err.message}`);
    console.log('shottion down the server for unhandled rejection ');

    // servar is closer----
    server.close(() => {
        process.exit(1);
    })

})



