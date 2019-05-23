const router = require('express').Router();
const axios = require('axios');

router.get('/:username/all', (req, res) => {
    axios.post("https://mif88l63ba.execute-api.us-west-2.amazonaws.com/default/personality-score",
        {
            headers: { accept: 'application/json' },
            username: req.params.username
        })
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json(err.response));
});

router.get('/:username', (req, res) => {
    axios.post("https://mif88l63ba.execute-api.us-west-2.amazonaws.com/default/personality-score",
        {
            headers: { accept: 'application/json' },
            username: req.params.username
        })
        .then(response => {
            res.status(200).json({
                username: response.data.username,
                image_url: response.data.image_url,
                word_count: response.data.word_count,
                personality: {
                    openness: response.data.personality[0].raw_score,
                    conscientiousness: response.data.personality[1].raw_score,
                    extraversion: response.data.personality[2].raw_score,
                    agreeableness: response.data.personality[3].raw_score,
                    emotional: response.data.personality[4].raw_score,
                },
                needs: {
                    challenge: response.data.needs[0].raw_score,
                    closeness: response.data.needs[1].raw_score,
                    curiosity: response.data.needs[2].raw_score,
                    excitement: response.data.needs[3].raw_score,
                    harmony: response.data.needs[4].raw_score,
                    ideal: response.data.needs[5].raw_score,
                    liberty: response.data.needs[6].raw_score,
                    love: response.data.needs[7].raw_score,
                    practicality: response.data.needs[8].raw_score,
                    self_expression: response.data.needs[9].raw_score,
                    stability: response.data.needs[10].raw_score,
                    structure: response.data.needs[11].raw_score,
                },
                values: {
                    conservation: response.data.values[0].raw_score,
                    openness: response.data.values[1].raw_score,
                    hedonism: response.data.values[2].raw_score,
                    self_enhancement: response.data.values[3].raw_score,
                    self_transcendence: response.data.values[4].raw_score,
                }
            })
        })
        .catch(err => res.status(500).json(err.response));
});

router.post('/reccomendations', (req, res) => {
    axios
        .post("https://du5jeazas5.execute-api.us-west-2.amazonaws.com/default/twitter-user-recommendation",
            {
                headers: { accept: "application/json" },
                usernames: req.body.usernames
            })
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json(err.response));
});

module.exports = router;