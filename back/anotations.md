#Themes da Home
title : string
subscriber : int
image_url : string
highlight: boolean

npx sequelize-cli model:generate --name Theme --attributes title:string,subscribersAmount:integer,imageUrl:string,highlight:boolean

seeds_backup:

        {
          title: 'Depressão',
          subscribersAmount: 0,
          imageUrl: 'https://images2.imgbox.com/66/4e/rFfonZQM_o.png',
          highlight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Autoestima',
          subscribersAmount: 0,
          imageUrl: 'https://images2.imgbox.com/96/1a/PhYIbE34_o.png',
          highlight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Motivação',
          subscribersAmount: 0,
          imageUrl: 'https://images2.imgbox.com/06/1f/ksKfNbhX_o.png',
          highlight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Relacionamento',
          subscribersAmount: 0,
          imageUrl: 'https://images2.imgbox.com/3a/9a/RUHVLAX9_o.png',
          highlight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          title: 'Sono',
          subscribersAmount: 0,
          imageUrl: 'https://images2.imgbox.com/19/a5/dJw6qfyT_o.png',
          highlight: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },