// Configurando e iniciando nosso server

// Configurando porta
const app = require('./src/app')
const PORT = 8080

// Iniciando server
app.listen(PORT, () => {
    console.log(`Seu servidor está na porta ${PORT}`)
})