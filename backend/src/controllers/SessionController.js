const connection = require('../database/connection');

// Login
module.exports = {
    async create(req, resp) {
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return resp.status(400).json({ error:'No ONG found with this ID'  });
        }

        return resp.json(ong);
    }
}