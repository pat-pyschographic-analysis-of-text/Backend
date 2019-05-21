exports.seed = function (knex, Promise) {
    return knex('users')
        .truncate()
        .then(function () {
            return knex('users').insert([
                { userName: 'admin', password: 1234 },
            ]);
        });
};
