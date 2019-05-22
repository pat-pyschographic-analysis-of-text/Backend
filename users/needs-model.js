const db = require('../data/dbConfig');

module.exports = {
    getNeeds,
    getNeedsBy,
    getNeedsById
};

function getNeeds() {
    return db('needs');
}

function getNeedsBy(filter) {
    return db('needs').where(filter);
}

function getNeedsById(id) {
    return db('needs').where({ id }).first();
}
