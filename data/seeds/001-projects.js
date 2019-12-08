
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Setup Files', description: 'Download dependencies', completed: false},
        {name: 'Setup index and server.js', description: 'Setup port and and server file', completed: false},
      ]);
    });
};
