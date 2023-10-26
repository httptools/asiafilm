const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

// Video list
app.get('/list', async (req, res) => {
    try {
        const response = await axios.get('http://winbedrives.com/api/movie/by/filtres/0/created/0/4F5A9C3D9A86FA54EACEDDD635185');
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});

// Search video
app.get('/search', async (req, res) => {
    const searchText = req.query.text;
    try {
        const response = await axios.get(`https://winbedrives.com/api/search/${searchText}/4F5A9C3D9A86FA54EACEDDD635185/`);
        if (response.status === 200 && response.data && response.data.posters.length > 0) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});

// Get series
app.get('/get', async (req, res) => {
    const id = req.query.id;
    try {
        const response = await axios.get(`http://winbedrives.com/api/season/by/serie/${id}/4F5A9C3D9A86FA54EACEDDD635185/`);
        if (response.status === 200 && response.data) {
            res.json(response.data);
        } else {
            res.status(500).send('Error');
        }
    } catch (error) {
        res.status(500).send('Error');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));