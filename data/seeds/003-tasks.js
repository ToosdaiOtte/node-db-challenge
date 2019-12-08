
exports.seed = function(knex) {
      return knex('tasks').insert([
        {description: 'download yarn dependencies', notes: 'lorem ipsum to do moten', completed: false, project_id: 1},
        {description: 'download express, helmet, knex dependencies', notes: 'dont forget knex-cleaner', completed: false, project_id: 1},
        {description: 'download nodemon as a devDependency', notes: 'use yarn add nodemon --dev', completed: false, project_id: 1},
        {description: 'create index.js file in root folder', notes: 'set server variable to require server file that will be made next, set up PORT connection with server.listen', completed: false, project_id: 2}
      ]);
};
