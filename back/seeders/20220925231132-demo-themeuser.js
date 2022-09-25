module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ThemeUsers', [

      {
        themeId: 1,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        themeId: 2,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ThemeUsers', null, {});
  }
};