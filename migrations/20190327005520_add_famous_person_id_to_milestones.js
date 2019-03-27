exports.up = function(knex, Promise) {
  return knex.schema.createTable('famous', table => {
    table.increments('famous_person_id').primary()
    table.integer('famous_id').unsigned()
    table.foreign('famous_id').references('milestones.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('famous')
};
