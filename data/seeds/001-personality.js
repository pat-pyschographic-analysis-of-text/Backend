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
                {
                    user_id: 2,
                    openness: 0.7678248160660228,
                    conscientiousness: 0.6225385802368893,
                    extraversion: 0.5077933957255706,
                    agreeableness: 0.6841206334378435,
                    emotional: 0.4926486874418688
                },
                {
                    user_id: 3,
                    openness: 0.7964359523657275,
                    conscientiousness: 0.602223391123676,
                    extraversion: 0.5174326532689012,
                    agreeableness: 0.6914073540873285,
                    emotional: 0.45285020463503345
                },
                {
                    user_id: 4,
                    openness: 0.7876289676377517,
                    conscientiousness: 0.6188734856011573,
                    extraversion: 0.5496773104593129,
                    agreeableness: 0.7223338004572293,
                    emotional: 0.46975599513952127
                },
                {
                    user_id: 5,
                    openness: 0.7932308489471769,
                    conscientiousness: 0.5877157726303939,
                    extraversion: 0.5325753852440135,
                    agreeableness: 0.676407913881947,
                    emotional: 0.4690708162610772
                },
                {
                    user_id: 6,
                    openness: 0.7801302600111985,
                    conscientiousness: 0.6133623631690905,
                    extraversion: 0.5055798832830123,
                    agreeableness: 0.6597863663822511,
                    emotional: 0.45884098453294975
                },
                {
                    user_id: 7,
                    openness: 0.8005940354722437,
                    conscientiousness: 0.7086775607816256,
                    extraversion: 0.62653782733087,
                    agreeableness: 0.7322580295651354,
                    emotional: 0.571842193146436
                },
                {
                    user_id: 8,
                    openness: 0.8014404979349434,
                    conscientiousness: 0.5932468450326654,
                    extraversion: 0.5157449611769678,
                    agreeableness: 0.7104994834133462,
                    emotional: 0.42631026316449605
                },
                {
                    user_id: 9,
                    openness: 0.7998234067278797,
                    conscientiousness: 0.6291862755146674,
                    extraversion: 0.5486664802621485,
                    agreeableness: 0.7134707486290863,
                    emotional: 0.4704023835414182

                },
                {
                    user_id: 10,
                    openness: 0.783852379888921,
                    conscientiousness: 0.6782909550497057,
                    extraversion: 0.5778347896639274,
                    agreeableness: 0.7709882679213006,
                    emotional: 0.5129050055530686
                },
            ]);
        });
};
