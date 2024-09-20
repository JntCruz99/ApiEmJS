const app = require('express')();

app.listen(80, () => console.log('Server executando...'));

app.get('/skill',(req, res) => {
    res.send({
        nome:"jonatas",
        idade: 2
    })
})