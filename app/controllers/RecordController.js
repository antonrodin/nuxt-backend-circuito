const { Record } = require('../models/index');

module.exports = {
    
    async index(req, res) {
        
        let page = (req.query.page) ? parseInt(req.query.page) : 0;
        let perPage = (req.query.perPage) ? parseInt(req.query.perPage) : 25;
        offset = page * perPage;

        let records = await Record.findAndCountAll({
            offset: offset,
            limit: perPage,
            order: [
                ['total', 'ASC']
            ]
        });
        
        res.json({
            page: page,
            perPage,
            total: records.count,
            records: records.rows
        })
    },

    async show(req, res) {
        let record = await Record.findOne({
            where: {
                slug: req.params.slug
            }
        });

        if(!record) {
            res.status(404).json({ msg: "El record no ha sido encontrado" });
        } else {
            res.json(record);
        }
    }

}