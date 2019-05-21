const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('users')
        .truncate()
        .then(function () {
            return knex('users').insert([
                {
                    userName: 'austen',
                    password: bcrypt.hashSync("austen", 10)
                },
                {
                    userName: 'ryanallred',
                    password: bcrypt.hashSync("ryanallred", 10)
                },
                {
                    userName: 'ryanherr',
                    password: bcrypt.hashSync("ryanherr", 10)
                },
                {
                    userName: 'garyvee',
                    password: bcrypt.hashSync("garyvee", 10)
                },
                {
                    userName: 'guidoVanRossum',
                    password: bcrypt.hashSync("guidoVanRossum", 10)
                },
                {
                    userName: 'Siraj',
                    password: bcrypt.hashSync("Siraj", 10)
                },
                {
                    userName: 'trump',
                    password: bcrypt.hashSync("trump", 10)
                },
                {
                    userName: 'rivatez',
                    password: bcrypt.hashSync("rivatez", 10)
                },
                {
                    userName: 'farnamstreet',
                    password: bcrypt.hashSync("farnamstreet", 10)
                },
                {
                    userName: 'BarackObama',
                    password: bcrypt.hashSync("BarackObama", 10)
                },
            ]);
        });
};
