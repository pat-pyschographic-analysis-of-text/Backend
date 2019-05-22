const db = require('../data/dbConfig');

module.exports = {
    getFavorites,
    getFavoritesBy,
    getFavoritesById
};

function getFavorites() {
    return db('favorites');
}

function getFavoritesBy(filter) {
    return db('favorites').where(filter);
}

function getFavoritesById(id) {
    return db('favorites').where({ id }).first();
}