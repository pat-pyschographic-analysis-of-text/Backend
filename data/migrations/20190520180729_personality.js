exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('personality', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.float('openness');
            tbl.float('conscientiousness');
            tbl.float('extraversion');
            tbl.float('agreeableness');
            tbl.float('emotional');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('personality')
};