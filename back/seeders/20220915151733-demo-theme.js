module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Themes', [

      {
        title: 'Depressão',
        subscribersAmount: 0,
        smallImage: 'http://localhost:3000/uploads/themes/sRosgn.png',
        largeImage: 'http://localhost:3000/uploads/themes/sRoPft.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Autoestima',
        subscribersAmount: 0,
        smallImage: 'http://localhost:3000/uploads/themes/sRorWN.png',
        largeImage: 'http://localhost:3000/uploads/themes/sRoSbR.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Relacionamento',
        subscribersAmount: 0,
        smallImage: 'http://localhost:3000/uploads/themes/sRxF5b.png',
        largeImage: 'http://localhost:3000/uploads/themes/sRopX2.png',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Sono',
        subscribersAmount: 0,
        smallImage: 'http://localhost:3000/uploads/themes/sRxnLB.png',
        largeImage: 'http://localhost:3000/uploads/themes/sRxCXV.png',
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