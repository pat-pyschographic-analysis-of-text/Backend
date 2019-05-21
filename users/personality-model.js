const db = require('../data/dbConfig');

module.exports = {
    getPersonality,
    getPersonalityBy,
    getPersonalityById
};

function getPersonality() {
    return db('personality');
}

function getPersonalityBy(filter) {
    return db('personality').where(filter);
}

function getPersonalityById(id) {
    return db('personality').where({ id }).first();
}