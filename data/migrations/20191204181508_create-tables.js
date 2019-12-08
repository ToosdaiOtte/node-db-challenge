exports.up = function(knex) {
    return knex.schema
    .createTable('projects', table => {
      table.increments();
      table.string('name', 255).unique().notNullable();
      table.string('description', 500);
      table.boolean('completed').notNullable();
    })

    .createTable('resources', table => {
      table.increments();
      table.string('name', 255).unique().notNullable();
      table.string('description', 500);
    })

    .createTable('tasks', table => {
      table.increments();

      table.string('description', 500).notNullable();
      table.string('notes', 500).notNullable();
      table.boolean('completed').notNullable();
    //   table.string('project_name').unsigned().notNullable().references('name').inTable('projects').onDelete('CASCADE').onUpdate(CASCADE);
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        
      
    })

    .createTable('project_resources', table => {
      table.increments();
      table
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      table
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects') 
};
