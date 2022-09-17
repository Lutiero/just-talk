module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Themes', [

      {
        title: 'Depressão',
        subscribersAmount: 10,
        thumbnail: 'https://images2.imgbox.com/66/4e/rFfonZQM_o.png',
        imageHighlighted: '',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Autoestima',
        subscribersAmount: 28,
        thumbnail: 'https://images2.imgbox.com/96/1a/PhYIbE34_o.png',
        imageHighlighted: '',
        highlighted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Relacionamento',
        subscribersAmount: 33,
        thumbnail: 'https://images2.imgbox.com/3a/9a/RUHVLAX9_o.png',
        imageHighlighted: '',
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: 'Sono',
        subscribersAmount: 14,
        thumbnail: 'https://images2.imgbox.com/19/a5/dJw6qfyT_o.png',
        imageHighlighted: '',
        highlighted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Themes', null, {});
  }
};