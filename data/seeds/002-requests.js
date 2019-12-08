
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Yarn', description: 'download all yarn dependencies by entering yarn into the terminal'},
      ]);
    });
};
