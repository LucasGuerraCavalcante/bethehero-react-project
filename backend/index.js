const express = require('express');

const app = express();

app.get('/', (resq, resp) => {
    return resp.json({
        event: 'Semana Omnistack 11.0',
        student: 'Lucas Guerra'
    })
});

app.listen(3333);