const connection = require('../database/connection');

module.exports = {
    async index(req, resp) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidentes')
            .where('ong_id', ong_id)
            .select('*');

        return resp.json(incidents);
    }
}