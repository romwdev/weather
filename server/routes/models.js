const db = require('../../database/db');

module.exports = {
    getUsers: (callback) => {
        const query = "SELECT * FROM users;";

        db.query(query, (err, res) => {
            if (err) callback(err);
            callback(null, res);
        })
    },

    postUser: (data, callback) => {
        const query = `INSERT INTO users (first_name, last_name, zip_code) VALUES ("${data.first_name}", "${data.last_name}", ${data.zip_code});`

        console.log(data.last_name)
        console.log(query);
        db.query(query, (err, res) => {
            if (err) callback(err);
            callback(null, data);
        })
    }
}