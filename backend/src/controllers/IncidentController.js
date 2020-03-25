const connection = require('../database/connection');

module.exports = {

    async index(req, resp) {

        const incidents = await connection('incidents').select('*');

        return resp.json(incidents);
    },

    async create(req, resp) {

        const ong_id = req.headers.authorization;
        // console.log(ong_id)

        const { 
            title, 
            description, 
            value, } = req.body;

        const [id] = await connection('incidents').insert({
            title, 
            ong_id,
            description, 
            value,
        })

        return resp.json({ id });
    }, 

    async delete(req, resp) {

        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return resp.status(401).json({ error: 'Operation not permitted.' })
        }

        await connection('incidents').where('id', id).delete();

        return resp.status(204).send();
    },

};