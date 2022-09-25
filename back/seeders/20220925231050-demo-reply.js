module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Replies', [

      {
        content: 'Olá, este é o PRIMEIRO reply do aplicativo, vamos discutir as relações erradas no banco de dados',
        userId: 6,
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o SEGUNDO reply do aplicativo, vamos discutir as relações erradas no banco de dados',
        userId: 6,
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o TERCEIRO reply do aplicativo, vamos discutir as relações erradas no banco de dados',
        userId: 7,
        topicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o QUARTO reply do aplicativo, vamos discutir as relações erradas no banco de dados',
        userId: 7,
        topicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o QUINTO reply do aplicativo, vamos discutir as relações erradas no banco de dados',
        userId: 6,
        topicId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Replies', null, {});
  }
};