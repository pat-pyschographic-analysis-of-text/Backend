exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('suggestions', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('twitter_handle');
            tbl.float('score');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('suggestions')
};