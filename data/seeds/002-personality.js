const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('personality')
        .truncate()
        .then(function () {
            return knex('personality').insert([
                {
                    user_id: 1,
                    openness: 0.7813513067725363,
                    conscientiousness: 0.6174269290256243,
                    extraversion: 0.5213051429911639,
                    agreeableness: 0.6844517378680528,
                    emotional: 0.4758283996310369
                },
            ]);
        });
};
