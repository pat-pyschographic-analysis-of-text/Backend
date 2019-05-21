exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('needs', tbl => {
            tbl.increments();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.float('challenge');
            tbl.float('closeness');
            tbl.float('curiosity');
            tbl.float('excitement');
            tbl.float('harmony');
            tbl.float('ideal');
            tbl.float('liberty');
            tbl.float('love');
            tbl.float('practicality');
            tbl.float('self_expression');
            tbl.float('stability');
            tbl.float('structure');
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('needs')
};