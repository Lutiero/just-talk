module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Themes', [

      {
        title: 'Depressão',
        subscribersAmount: 10,
        smallImage: 'https://iili.io/sRosgn.png',
        largeImage: 'https://iili.io/sRoPft.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Autoestima',
        subscribersAmount: 28,
        smallImage: 'https://iili.io/sRorWN.png',
        largeImage: 'https://iili.io/sRoSbR.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Relacionamento',
        subscribersAmount: 33,
        smallImage: 'https://iili.io/sRxF5b.png',
        largeImage: 'https://iili.io/sRopX2.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Sono',
        subscribersAmount: 14,
        smallImage: 'https://iili.io/sRxnLB.png',
        largeImage: 'https://iili.io/sRxCXV.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Themes', null, {});
  }
};