const express = require('express');
const crtypto = require('crypto');

const routes = express.Router();

routes.post('/ongs', (resq, resp) => {

    const { name,
            email,
            whatsapp,
            city,
            state} = resq.body;

    const id = crypto.randomBytes(4).toString('HEX')

    

    return resp.json();
});

module.exports = routes;