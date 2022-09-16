module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Themes', [

      {
        title: 'Depressão',
        subscribersAmount: 10,
        imageUrl: 'https://images2.imgbox.com/66/4e/rFfonZQM_o.png',
        highlight: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Autoestima',
        subscribersAmount: 28,
        imageUrl: 'https://images2.imgbox.com/96/1a/PhYIbE34_o.png',
        highlight: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Motivação',
        subscribersAmount: 56,
        imageUrl: 'https://images2.imgbox.com/06/1f/ksKfNbhX_o.png',
        highlight: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Relacionamento',
        subscribersAmount: 33,
        imageUrl: 'https://images2.imgbox.com/3a/9a/RUHVLAX9_o.png',
        highlight: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Sono',
        subscribersAmount: 14,
        imageUrl: 'https://images2.imgbox.com/19/a5/dJw6qfyT_o.png',
        highlight: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Themes', null, {});
  }
};