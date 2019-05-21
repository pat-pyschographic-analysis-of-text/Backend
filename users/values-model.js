const db = require('../data/dbConfig');

module.exports = {
    getValues,
    getValuesBy,
    getValuesById
};

function getValues() {
    return db('values');
}

function getValuesBy(filter) {
    return db('values').where(filter);
}

function getValuesById(id) {
    return db('values').where({ id }).first();
}