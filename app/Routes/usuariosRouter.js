module.exports = function(app, mariadb) {
    app.post('/post/interno', (req, res) => {
        mariadb.postInternos(req.body, function(result) {
            res.send(result)
        })
    })
}