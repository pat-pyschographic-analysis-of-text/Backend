exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('favorites', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.string('twitter_handle');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('favorites')
};