exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('favorites', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('twitter_handle');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('favorites')
};