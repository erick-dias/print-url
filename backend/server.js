const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/screenshot', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL é obrigatória' });

    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 720 });
        await page.goto(url, { waitUntil: 'networkidle2' });

        const screenshot = await page.screenshot({ encoding: 'base64' });

        await browser.close();
        res.json({ screenshot: `data:image/png;base64,${screenshot}` });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao capturar a tela' });
    }
});

const PORT = 3001;  
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});