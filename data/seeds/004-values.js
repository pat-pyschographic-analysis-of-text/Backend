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
                {
                    user_id: 2,
                    conservation: 0.592184820598271,
                    openness: 0.781582096371922,
                    hedonism: 0.686720913776426,
                    self_enhancement: 0.714264284507009,
                    self_transcendence: 0.822219270728318,
                },
                {
                    user_id: 3,
                    conservation: 0.568442225801271,
                    openness: 0.784145269280759,
                    hedonism: 0.631301392732156,
                    self_enhancement: 0.680458851915467,
                    self_transcendence: 0.829652509061425,
                },
                {
                    user_id: 4,
                    conservation: 0.61865097877075,
                    openness: 0.809684779746937,
                    hedonism: 0.710631827937028,
                    self_enhancement: 0.737887443373125,
                    self_transcendence: 0.830727379311685,
                },
                {
                    user_id: 5,
                    conservation: 0.569915781880277,
                    openness: 0.785626498596616,
                    hedonism: 0.653160953827435,
                    self_enhancement: 0.698992971306978,
                    self_transcendence: 0.824163226539818,
                },
                {
                    user_id: 6,
                    conservation: 0.590850297951664,
                    openness: 0.81321505638123,
                    hedonism: 0.637930591823328,
                    self_enhancement: 0.708884916193197,
                    self_transcendence: 0.834157517572275,
                },
                {
                    user_id: 7,
                    conservation: 0.634275641056324,
                    openness: 0.755409775642916,
                    hedonism: 0.64618031695628,
                    self_enhancement: 0.619661306775372,
                    self_transcendence: 0.805244299892387,
                },
                {
                    user_id: 8,
                    conservation: 0.569976016535249,
                    openness: 0.787580138922978,
                    hedonism: 0.656333702375666,
                    self_enhancement: 0.684361537579379,
                    self_transcendence: 0.829476922005945,
                },
                {
                    user_id: 9,
                    conservation: 0.601269094261955,
                    openness: 0.800803362586374,
                    hedonism: 0.643762375886429,
                    self_enhancement: 0.677682512611842,
                    self_transcendence: 0.83491806111549,
                },
                {
                    user_id: 10,
                    conservation: 0.675058969086769,
                    openness: 0.78216637172739,
                    hedonism: 0.667220940214937,
                    self_enhancement: 0.67885062084115,
                    self_transcendence: 0.831212991445205,
                },
            ]);
        });
};
