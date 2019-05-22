const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getByUsername,
    getById,
    addUser,
    removeUser,
    update
};

function getUsers() {
    return db('users');
}

function getByUsername(username) {
    return db('users').where({ username: username }).first();;
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

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}