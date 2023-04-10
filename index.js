const express = require('express');
const app = express();

const port = 3000;

app.get('/:link', (req, res) => {
    res.status(301).redirect(`https://api.blueysh.me/api/v1/links/${req.params.link}`);
});

app.listen(port, () => {
    console.info("Started the interface for the BAPI links endpoint.")
});