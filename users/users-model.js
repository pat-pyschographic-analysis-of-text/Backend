const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getByFilter,
    getById,
    addUser
};

function getUsers() {
    return db('users');
}

function getByFilter(filter) {
    return db('users').where(filter);
}

function getById(id) {
    return db('users').where({ id }).first();
}

function addUser(user) {
    return db('users')
        .insert(user)
        .then(ids => ({ id: ids[0] }));
}