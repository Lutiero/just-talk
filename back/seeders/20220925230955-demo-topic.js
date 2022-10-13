module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Topics', [

      {
        content: 'Olá, este é o PRIMEIRO tópico do aplicativo, vamos discutir as relações erradas no banco de dados',
        repliesAmount: 2,
        themeId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o SEGUNDO tópico do aplicativo, vamos discutir as relações erradas no banco de dados',
        repliesAmount: 2,
        themeId: 2,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o TERCEIRO tópico do aplicativo, vamos discutir as relações erradas no banco de dados',
        repliesAmount: 1,
        themeId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o QUARTO tópico do aplicativo, vamos discutir as relações erradas no banco de dados',
        repliesAmount: 0,
        themeId: 4,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        content: 'Olá, este é o QUINTO tópico do aplicativo, vamos discutir as relações erradas no banco de dados',
        repliesAmount: 0,
        themeId: 1,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Topics', null, {});
  }
};