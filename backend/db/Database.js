const mongodb = require("mongodb")


const connectDatabase = () => {
    mongodb.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).the((data) => {
        console.log(`MongDB connected With server : ${data.connection.host}`)
    })
}


module.exports = connectDatabase