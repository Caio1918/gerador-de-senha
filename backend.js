const script = require('./script.js')

const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/senha', (res, req) => {
    let charMin = parseInt(req.query.charMin) 
    let charMai = parseInt(req.query.charMai)
    let num = parseInt(req.query.num)

    // Verificador
    if (charMin < 0 || charMai < 0 || num < 0) {
        return res.status(400).json({erro: 'Os valores devem ser positivos'}) 
    }

    let senha = script.gerarSenha(charMin, charMai, num)

    res.json({senha})
})


app.get('/', (res, req) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Servidor Rodando na Porta: ${port}`)
})