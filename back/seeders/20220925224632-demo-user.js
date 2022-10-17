module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [

      {
        name: 'Arnaldo Cesar Coelho',
        email: 'arnaldo@gmail.com',
        imageProfile: 'https://iili.io/sRqrFa.png',
        password: 'io',
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Scarlett Johansson',
        email: 'scarlett@gmail.com',
        imageProfile: 'https://iili.io/sRBKo7.png',
        password: 'iiliio',
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Kut Cobain da Silva',
        email: 'nirvana@gmail.com',
        imageProfile: 'https://iili.io/sRBMDN.png',
        password: 'ili.io',
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Courtney Michelle Cobain',
        email: 'cmc@gmail.com',
        imageProfile: 'https://iili.io/sRn9Tl.png',
        password: 'iiio',
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Frances Bean Cobain',
        email: 'fbc@gmail.com',
        imageProfile: 'https://iili.io/sRCMdb.png',
        password: 'io',
        isDoctor: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'John Doe',
        email: 'cmc@gmail.com',
        imageProfile: 'https://iili.io/s1pSaa.png',
        password: 'iil',
        isDoctor: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Maria Doe',
        email: 'fbc@gmail.com',
        imageProfile: 'https://iili.io/s1pSaa.png',
        password: 'ii',
        isDoctor: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};