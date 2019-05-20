const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getUser,
    addUser
};

function getUsers() {
    return db('users');
}

function getUser(id) {
    return db('actions').where({ id }).first();
}

function addUser(user) {
    return db('users')
        .insert(user)
        .then(ids => ({ id: ids[0] }));
}