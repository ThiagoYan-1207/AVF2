const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota Home
app.get('/', (req, res) => {
    res.send(`
        <h1>Página Inicial (Home)</h1>
        <p>Bem-vindo ao projeto AVF2!</p>
        <hr>
        <a href="/">Home</a> | 
        <a href="/sobre">Sobre</a> | 
        <a href="/servicos">Serviços</a>
    `);
});

// Rota Sobre
app.get('/sobre', (req, res) => {
    res.send(`
        <h1>Sobre o Projeto</h1>
        <p>Aplicação Node.js desenvolvida com Express para a AVF2.</p>
        <hr>
        <a href="/">Home</a> | 
        <a href="/sobre">Sobre</a> | 
        <a href="/servicos">Serviços</a>
    `);
});

// Rota Serviços
app.get('/servicos', (req, res) => {
    res.send(`
        <h1>Nossos Serviços</h1>
        <p>Oferecemos soluções web e deploy em nuvem.</p>
        <hr>
        <a href="/">Home</a> | 
        <a href="/sobre">Sobre</a> | 
        <a href="/servicos">Serviços</a>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});