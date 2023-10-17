const db = require('../../database/db');

module.exports = {
    getAllUsers: (callback) => {
        const query = "SELECT * FROM users;";

        db.query(query, (err, res) => {
            if (err) callback(err);
            callback(null, res);
        })
    }
}