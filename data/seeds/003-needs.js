const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('needs')
        .truncate()
        .then(function () {
            return knex('needs').insert([
                {
                    user_id: 1,
                    challenge: 0.7416301896,
                    closeness: 0.7062553265,
                    curiosity: 0.8407254959,
                    excitement: 0.5538646025,
                    harmony: 0.7538157035,
                    ideal: 0.690550592,
                    liberty: 0.701682194,
                    love: 0.7007445792,
                    practicality: 0.708423555,
                    selfExpression: 0.6206685614,
                    stability: 0.6871405829,
                    structure: 0.6885889259
                }
            ]);
        });
};
