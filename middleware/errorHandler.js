const error = (err, req, res, next) => {
    res.status(404).json({ err })
}

module.exports = error
