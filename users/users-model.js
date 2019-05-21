const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getByUsername,
    getById,
    addUser,
    removeUser
};

function getUsers() {
    return db('users');
}

function getByUsername(filter) {
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

function removeUser(id) {
    return db('users')
        .where({ id: id })
        .del()
}