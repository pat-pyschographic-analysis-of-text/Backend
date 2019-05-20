exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('values', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl.float('conservation');
            tbl.float('openness');
            tbl.float('hedonism');
            tbl.float('self_enhancement');
            tbl.float('self_transcendence');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('values')
};