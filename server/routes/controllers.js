const models = require('./models');
const axios = require('axios').default;

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const data = await new Promise((resolve, reject) => {
                models.getAllUsers((err, users) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    resolve(users);
                });
            });

            const options = {
                method: 'GET',
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                headers: {
                    'X-RapidAPI-Key': 'a63058d3camsh6bc806909ec5c73p1690eajsnd148858b67e5',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            const promises = data.map(async (user) => {
                options.params = { q: `${user.zip_code}` };

                try {
                    const response = await axios.request(options);

                    user.local_time = response.data.location.localtime;
                    user.temp = response.data.current.temp_f;
                } catch (error) {
                    console.error(error);
                }
            });

            await Promise.all(promises);

            res.json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        }
    }
}
