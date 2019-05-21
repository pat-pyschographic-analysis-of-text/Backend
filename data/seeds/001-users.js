const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('users')
        .truncate()
        .then(function () {
            return knex('users').insert([
                {
                    userName: 'admin',
                    password: bcrypt.hashSync("admin", 10)
                },
                {
                    userName: 'tim',
                    password: bcrypt.hashSync("tim", 10)
                },
                {
                    userName: 'clint',
                    password: bcrypt.hashSync("clint", 10)
                },
                {
                    userName: 'kimberlee',
                    password: bcrypt.hashSync("kimberlee", 10)
                },
                {
                    userName: 'jay',
                    password: bcrypt.hashSync("jay", 10)
                },
                {
                    userName: 'dmitriy',
                    password: bcrypt.hashSync("dmitriy", 10)
                },
                {
                    userName: 'cole',
                    password: bcrypt.hashSync("cole", 10)
                },
                {
                    userName: 'peter',
                    password: bcrypt.hashSync("peter", 10)
                },
                {
                    userName: 'gerard',
                    password: bcrypt.hashSync("gerard", 10)
                },

            ]);
        });
};
