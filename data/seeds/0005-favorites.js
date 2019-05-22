const bcrypt = require('bcryptjs');

exports.seed = function (knex, Promise) {
    return knex('favorites')
        .truncate()
        .then(function () {
            return knex('favorites').insert([
                {
                    user_id: 1,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 1,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 2,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 2,
                    twitter_handle: "austen",
                },
                {
                    user_id: 2,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 3,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 3,
                    twitter_handle: "austen",
                },
                {
                    user_id: 3,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 4,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 4,
                    twitter_handle: "austen",
                },
                {
                    user_id: 4,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 5,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 5,
                    twitter_handle: "austen",
                },
                {
                    user_id: 5,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 6,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 6,
                    twitter_handle: "austen",
                },
                {
                    user_id: 6,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 7,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 7,
                    twitter_handle: "austen",
                },
                {
                    user_id: 7,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 8,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 8,
                    twitter_handle: "austen",
                },
                {
                    user_id: 8,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 9,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 9,
                    twitter_handle: "austen",
                },
                {
                    user_id: 9,
                    twitter_handle: "dan_abramov",
                },
                {
                    user_id: 10,
                    twitter_handle: "elonmusk",
                },
                {
                    user_id: 10,
                    twitter_handle: "austen",
                },
                {
                    user_id: 10,
                    twitter_handle: "dan_abramov",
                },
            ]);
        });
};
