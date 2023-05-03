// this is async promise error handling
module.exports = (thefunc) => (req, res, next) => {
    Promise.resolve(thefunc(req, res, next)).catch(next)
}