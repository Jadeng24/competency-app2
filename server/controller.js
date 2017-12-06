module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        const animals = req.body;
        db.get_all().then(response => {
            res.send(response);
        })
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        
        db.delete_item([id]).then()
    }
}