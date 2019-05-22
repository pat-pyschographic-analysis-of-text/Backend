const db = require('../data/dbConfig');

module.exports = {
    getFavorites,
    getFavoritesBy,
    getFavoritesById,
    addFavorite
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

function addFavorite(twitter_handle) {
    return db('favorites')
        .insert(twitter_handle)
        .then(ids => ({ id: ids[0] }));
}

