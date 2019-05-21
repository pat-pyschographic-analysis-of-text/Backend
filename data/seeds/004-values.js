const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('values')
        .truncate()
        .then(function () {
            return knex('values').insert([
                {
                    user_id: 1,
                    conservation: 0.567345724041174,
                    openness: 0.774195336505168,
                    hedonism: 0.654351061190337,
                    self_enhancement: 0.69769717750144,
                    self_transcendence: 0.818437579976961,
                },
            ]);
        });
};
